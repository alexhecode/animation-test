ScrollOut({
        onShown(el) {
                // remove the class
                el.classList.remove('animate__animated');

                // force reflow
                void el.offsetWidth;

                // re-add the animated cl
                el.classList.add('animate__animated');
        },
});
