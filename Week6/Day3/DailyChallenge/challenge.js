// Instructions

// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

//     Create a class named Video. The class should be constructed with the following parameters:
//         title (a string)
//         uploader (a string, the person who uploaded it)
//         time (a number, the duration of the video - in seconds)
//     Create a method called watch() which displays a string as follows:
//     “uploader parameter watched all time parameter of title parameter!”
//     Instantiate a new Video instance and call the watch() method.
//     Instantiate a second Video instance with different values.

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        const minutes = Math.floor(this.time / 60);
        const seconds = this.time % 60;
        console.log(`${this.uploader} watched all ${minutes} minutes and ${seconds} seconds of ${this.title}!”`);
    } 
}

const video1 = new Video("Pranks", "funnyUser", 350);
video1.watch();

const video2 = new Video("Cooking Tutorial", "Chef123", 670);
video2.watch(); 
