var Events = function ()
{
    this.customEvents = {};

    // Move all arguments (events names) to this.customEvents
    if (arguments.length > 0)
        for (var i=arguments.length-1; i >= 0; i--)
            if (typeof arguments[i] === 'string')
                this.customEvents[arguments[i]] = [];


    // add(name fn)
    // Adds new event.
    // name: name of event array of event names.
    // fn: event function.
    // el (optional): an element.
    this.on = function (name, fn, el)
    {
        if ((typeof name != 'string' 
                    && !(name instanceof Array)
            ) || typeof fn != 'function')
            return this;


        var addE = function (n, f, el)
        {
            el = el || document;

            if (this.customEvents.contains(n))
                this.customEvents[n].push(f);
            else
            {
                var aE = function(e)
                {
                    if (e.addEventListener)
                    e.addEventListener(n, f, false);
                    else if (e.attachEvent)
                        e.attachEvent('on' + n, f);
                    else e['on' + n];
                }
                if (el instanceof Array)
                    el.map(function(e) {aE(e);});
                else aE(e);
            }
        }.bind(this);

        if (name instanceof Array)
        {
            if (name.length == 0) return this;

            for (var i = name.length - 1; i >= 0; i--)
                addE(name[i], fn, el);
        }
        else
            addE(name, fn, el);

        return this;
    };


    // event(name)
    // Executes functions of custom event.
    // name: name of event.
    // props (optional): arguments for listening 
    //       function to be executed.
    this.event = function (name, props)
    {
        if (!this.customEvents.contains(name))
            return this;

        var fns = this.customEvents[name];
        if (fns.length == 0) return this;

        for (var i = fns.length - 1; i >= 0; i--)
        {
            fns[i](props);
        }
    };
};