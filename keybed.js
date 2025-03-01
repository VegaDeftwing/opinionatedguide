class PianoKeybed extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
<style>
                .keybed-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }
                .label-container {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    font-size: 2vh;
                    color: white;
                    margin-bottom: 0.5vh;
                }
                .instrument-label {
                    text-align: left;
                    font-size: 2.3vh;
                }
                .variant-label {
                    position: absolute;
                    text-align: left;
                    font-size: 1.5vh;
                    padding-top: 2.2vh;
                }
                .keybed {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 2em;
                    padding: 1vh 0;
                }
                .white-key {
                    flex: 1;
                    height: 80%;
                    border: 0.2vh solid black;
                    background: white;
                    position: relative;
                }
                .black-key {
                    width: 40%;
                    height: 67%;
                    border: 0.2vh solid black;
                    background: black;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(+50%);
                    z-index: 2;
                }
                .highlight {
                    border-color: #000 !important;
                    background: #F5F !important;
                    border: 0.2vh solid black;
                }
                .black-key.highlight {
                    border-color: #000 !important;
                    background: #808 !important;
                    border: 0.2vh solid black;
                }
                .octave-c {
                    background: linear-gradient(0deg, rgb(255, 0, 255) 0%, rgba(255, 255, 255, 255) 50%);
                }
                .octave-c.highlight {
                    background: linear-gradient(0deg, rgba(255,0,255,1) 0%, rgba(255, 255, 255, 255) 100%) !important;
                }
                .label {
                    width: 100%;
                    text-align: center;
                    font-size: 1.5vh;
                    margin-top: -1vh;
                    color: white;
                }
                .octave-label {
                    font-size: 1em;
                    position: absolute;
                    color: white;
                    margin-top: 1.5vh;
                    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
                    z-index: 3;
                }
                .key-container {
                    position: relative;
                    display: flex;
                    flex-grow: 1;
                }
            </style>

            <div class="keybed-container">
                <div class="label-container">
                    <div class="instrument-label"></div>
                    <div class="variant-label"></div>
                </div>
                <div class="keybed"></div>
            </div>
        `;
    }

    connectedCallback() {
        if (this.hasAttribute('label')) {
            this.shadowRoot.querySelector('.instrument-label').innerText = this.getAttribute('label');
        } else {
            // If there's no label, we still want the variant label to be positioned correctly, so
            // we need to move it up.
            this.shadowRoot.querySelector('.variant-label').style.marginTop = '-0.7vh';
            // We should also move the entire keybed container up to make them more compact.
            this.shadowRoot.querySelector('.keybed-container').style.marginBottom = '-1vh';
            this.shadowRoot.querySelector('.keybed-container').style.marginTop = '-.5vh';
            // And move the variant label up
            this.shadowRoot.querySelector('.variant-label').style.paddingTop = '0.1vh';
        }

        if (this.hasAttribute('variant')) {
            this.shadowRoot.querySelector('.variant-label').innerText = this.getAttribute('variant');
        }

                // Default values
        let start = 'C4';
        let end = 'C5';

        // Set the range of notes to highlight
        if (this.hasAttribute('highlight')) {
            [start, end] = this.getAttribute('highlight').split('-');
        }

        // Convert start note name + number to index. Ex: C4 -> 40 or C#4 -> 41
        // Get the octave number
        let startOctave = start.slice(-1);
        let startNote = start.slice(0, -1);
        let startNoteIndex = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'].indexOf(startNote);
        start = ((parseInt(startOctave)-1) * 12) + startNoteIndex;

        // Do the same for the end note
        let endOctave = end.slice(-1);
        let endNote = end.slice(0, -1);
        let endNoteIndex = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'].indexOf(endNote);
        end = ((parseInt(endOctave)-1) * 12) + endNoteIndex;

        this.renderKeybed(start, end);
    }

    renderKeybed(start, end ) {
        const keybed = this.shadowRoot.querySelector('.keybed');
        keybed.innerHTML = '';

        const pattern = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
        const blackKeyOffsets = { 'C#': true, 'D#': true, 'F#': true, 'G#': true, 'A#': true };

        let whiteKeyIndex = 0; // Used for correct positioning of black keys

        for (let i = 0; i < 88; i++) {
            let note = pattern[i % 12];
            let keyContainer = document.createElement('div');
            keyContainer.classList.add('key-container');

            if (blackKeyOffsets[note]) {
                let blackKey = document.createElement('div');
                blackKey.classList.add('black-key');

                if (i >= start && i <= end) {
                    blackKey.classList.add('highlight');
                }

                // Append black key **relative to previous white key**
                keybed.children[whiteKeyIndex - 1]?.appendChild(blackKey);
            } else {
                let whiteKey = document.createElement('div');
                whiteKey.classList.add('white-key');

                if (note === 'C') {
                    whiteKey.classList.add('octave-c');
                    let label = document.createElement('div');
                    label.classList.add('octave-label');
                    label.innerText = `${Math.floor(i / 12) + 1}`;
                    whiteKey.appendChild(label);
                }

                if (i >= start && i <= end) {
                    whiteKey.classList.add('highlight');
                }

                keybed.appendChild(whiteKey);
                whiteKeyIndex++; // Increment only when adding white keys
            }
        }
    }
}

customElements.define('piano-keybed', PianoKeybed);