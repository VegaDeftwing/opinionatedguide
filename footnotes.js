document.addEventListener('DOMContentLoaded', () => {
    const footnotes = document.querySelectorAll('footnote');
    footnotes.forEach((footnote, index) => {
        const id = `footnote-${index + 1}`;

        // Create the superscript index
        const superscript = document.createElement('sup');
        superscript.className = 'footnote-index';
        superscript.textContent = `(${index + 1})`;
        superscript.dataset.popoverTarget = id;

        // Insert the superscript after the footnote
        footnote.parentNode.insertBefore(superscript, footnote.nextSibling);

        // Create the popover element
        const popover = document.createElement('div');
        popover.id = id;
        popover.className = 'popover';

        // Clone child nodes of footnote into popover
        footnote.childNodes.forEach(node => {
            popover.appendChild(node.cloneNode(true));
        });

        document.body.appendChild(popover);

        // Function to hide the popover
        const hidePopover = (event) => {
            // Don't hide if text is selected, to be copy-paste friendly.
            const selection = window.getSelection();
            if (!selection.isCollapsed) {
                return;
            }

            if (event && event.target.closest('.popover') !== popover) {
                popover.style.display = 'none';
                document.removeEventListener('click', hidePopover);
                window.removeEventListener('scroll', hidePopover);
            }
        };

        // Add event listener to the superscript
        superscript.addEventListener('click', (event) => {
            const popover = document.getElementById(event.target.dataset.popoverTarget);
            const rect = event.target.getBoundingClientRect();
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;

            // Calculate the position relative to the document
            popover.style.top = `${rect.bottom + scrollY + 5}px`; // Position below the text
            popover.style.left = `${rect.left + scrollX}px`;
            popover.style.display = 'block';

            // Close popover when clicking outside or scrolling
            setTimeout(() => {
                document.addEventListener('click', hidePopover);
                window.addEventListener('scroll', hidePopover);
            }, 0);
        });
    });
});