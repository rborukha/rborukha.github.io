
            // Setup plugin with default settings
            $(document).ready(function() {

                $.apScrollTop({
                    'onInit': function(evt) {
                        console.log('apScrollTop: init');
                    }
                });

                // Add event listeners
                $.apScrollTop().on('apstInit', function(evt) {
                    console.log('apScrollTop: init');
                });

                $.apScrollTop().on('apstToggle', function(evt, details) {
                    console.log('apScrollTop: toggle / is visible: ' + details.visible);
                });

                $.apScrollTop().on('apstCssClassesUpdated', function(evt) {
                    console.log('apScrollTop: cssClassesUpdated');
                });

                $.apScrollTop().on('apstPositionUpdated', function(evt) {
                    console.log('apScrollTop: positionUpdated');
                });

                $.apScrollTop().on('apstEnabled', function(evt) {
                    console.log('apScrollTop: enabled');
                });

                $.apScrollTop().on('apstDisabled', function(evt) {
                    console.log('apScrollTop: disabled');
                });

                $.apScrollTop().on('apstBeforeScrollTo', function(evt, details) {
                    console.log('apScrollTop: beforeScrollTo / position: ' + details.position + ', speed: ' + details.speed);

                    // You can return a single number here, which means that to this position
                    // browser window scolls to
                    /*
                    return 100;
                    */

                    // .. or you can return an object, containing position and speed:
                    /*
                    return {
                        position: 100,
                        speed: 100
                    };
                    */

                    // .. or do not return anything, so the default values are used to scroll
                });

                $.apScrollTop().on('apstScrolledTo', function(evt, details) {
                    console.log('apScrollTop: scrolledTo / position: ' + details.position);
                });

                $.apScrollTop().on('apstDestroy', function(evt, details) {
                    console.log('apScrollTop: destroy');
                });

            });


            // Add change events for options
            $('#option-enabled').on('change', function() {
                var enabled = $(this).is(':checked');
                $.apScrollTop('option', 'enabled', enabled);
            });

            $('#option-visibility-trigger').on('change', function() {
                var value = $(this).val();
                if (value == 'custom-function') {
                    $.apScrollTop('option', 'visibilityTrigger', function(currentYPos) {
                        var imagePosition = $('#image-for-custom-function').offset();
                        return (currentYPos > imagePosition.top);
                    });
                }
                else {
                    $.apScrollTop('option', 'visibilityTrigger', parseInt(value));
                }
            });

            $('#option-visibility-fade-speed').on('change', function() {
                var value = parseInt($(this).val());
                $.apScrollTop('option', 'visibilityFadeSpeed', value);
            });

            $('#option-scroll-speed').on('change', function() {
                var value = parseInt($(this).val());
                $.apScrollTop('option', 'scrollSpeed', value);
            });

            $('#option-position').on('change', function() {
                var value = $(this).val();
                $.apScrollTop('option', 'position', value);
            });
		