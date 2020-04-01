function Animation(frames, infinite = true, fps = 8) {
    let frameIdx = 0;
    
    const animationInterval = setInterval(() => {
        process.stdout.clearLine(1);
        process.stdout.cursorTo(0);
        process.stdout.write(frames[frameIdx]);

        frameIdx = frameIdx + 1;

        if (frameIdx >= frames.length) {
            if (infinite) {
                frameIdx = frameIdx % frames.length;

                process.stdout.clearLine();
                process.stdout.cursorTo(0);
            } else {
                clearInterval(animationInterval);
            }
        }
    }, 1000 / fps);
}

module.exports = Animation;