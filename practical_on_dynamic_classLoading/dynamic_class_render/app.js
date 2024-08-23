const app = Vue.createApp({
    data() {
        return {
            value: '',
            classes: [],
            isHidden: false,
            colour: ''
        };
    },
    methods: {
        add() {
            if (this.value) {
              //  this.classes = [this.value]; // Replaces the current classes with the new class
              this.classes.push(this.value)
                this.value = ''; // Clear the input field after adding
            }
        },
        toggle() {
            if (this.isHidden) {
                this.classes = this.classes.filter(c => c !== 'hidden'); // Remove 'hidden' class
                this.classes.push('visible'); // Add 'visible' class
            } else {
                this.classes = this.classes.filter(c => c !== 'visible'); // Remove 'visible' class
                this.classes.push('hidden'); // Add 'hidden' class
            }
            this.isHidden = !this.isHidden; // Toggle the isHidden state
        }
    }
});

app.mount('#assignment');
