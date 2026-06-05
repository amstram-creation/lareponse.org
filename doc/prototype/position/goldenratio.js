const GOLDEN_RATIO = 1.618033988749895;

        function styleSection(section, style) {

            let element = document.getElementById(section);

            for (let key in style) {
                style[key] = `${style[key]}px`;
            }
            Object.assign(element.style, style);
        }

        function resizeSection5(previousWidth, previousHeight, right) {

            styleSection('section5', {
                'width': previousWidth - 1,
                'height': (previousHeight / GOLDEN_RATIO) - 1,
                'right': right,
                'bottom': previousHeight,
            });

        }

        function resizeSection4(previousWidth, previousHeight) {
            let width = (previousWidth / GOLDEN_RATIO);
            let height = (previousHeight / GOLDEN_RATIO);
            
            styleSection('section4', {
                'width': width - 1,
                'height': height  - 1,
                'right': previousWidth,
                'bottom': 0,
            });
            
            let ratio = (1 / GOLDEN_RATIO) * 100
            let section = document.getElementById('section4');
            section.style.backgroundSize = `${ratio}%`;
            resizeSection5(width, height, previousWidth);

        }

        function resizeSection3(previousWidth, previousHeight) {
            let width = (previousWidth / GOLDEN_RATIO);
            let height = (previousHeight / GOLDEN_RATIO);

            styleSection('section3', {
                'width': width - 1,
                'height': height  - 1,
                'right': 0,
                'bottom': 0,
            });

            resizeSection4(width, height);

        }

        function resizeSection2(previousWidth, previousHeight) {
            let width = (previousWidth / GOLDEN_RATIO);
            let height = (previousHeight / GOLDEN_RATIO);

            styleSection('section2', {
                'width': width - 1,
                'height': height  - 2,
                'left': previousWidth - 1,
                'top': 0,
            });
            resizeSection3(width, height);
        }

        function resizeSection1() {
            // Calculate dimensions based on the golden ratio
            let width = (window.innerWidth / GOLDEN_RATIO);
            let height = window.innerHeight;

            styleSection('section1', {
                'width': width - 2,
                'height': height  - 2,
                'left': 0,
                'top': 0,
            });
            resizeSection2(width, height);

        }
        // Initial resize
        resizeSection1();

        // Update dimensions when the window is resized
        window.addEventListener('resize', resizeSection1);