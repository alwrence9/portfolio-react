import React, { useRef, useEffect } from 'react';
import Particle from "./Particle";

const Starlight = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        class Effect {
            constructor(width, height, context) {
                this.width = width;
                this.height = height;
                this.ctx = context;
                this.particlesArray = [];
                this.gap = 20;
                this.mouse = {
                    radius: 100,
                    x: 0,
                    y: 0
                };
                this.opacity = 1;
                this.gradients = [
                    { ratio: 0, color: [75, 0, 130] },      // Indigo
                    { ratio: 0.3, color: [0, 0, 139] },     // Dark Blue
                    { ratio: 0.6, color: [0, 191, 255] },   // Deep Sky Blue
                    { ratio: 1, color: [224, 255, 255] }    // Light Cyan
                ];
                window.addEventListener('mousemove', this.handleMouseMove);
                window.addEventListener('resize', this.handleResize);
                window.addEventListener('scroll', this.handleScroll);
                this.init();
            }

            handleMouseMove = (e) => {
                const rect = canvas.getBoundingClientRect();
                this.mouse.x = (e.clientX - rect.left) * window.devicePixelRatio;
                this.mouse.y = (e.clientY - rect.top) * window.devicePixelRatio;
            }

            handleResize = () => {
                canvas.width = window.innerWidth * window.devicePixelRatio;
                canvas.height = window.innerHeight * window.devicePixelRatio;
                this.width = canvas.width;
                this.height = canvas.height;
                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;
                this.particlesArray = [];
                this.init();
            }

            handleScroll = () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollFraction = scrollTop / maxHeight;

                // Set a faster fade speed
                const fadeSpeed = 6; // Increase or decrease this value as needed
                this.opacity = 1 - Math.min(1, scrollFraction * fadeSpeed); // Ensure opacity doesn't exceed bounds
                console.log('opacity:', this.opacity); // Check opacity value
            }



            init() {
                for (let i = 0; i < 1000; i++) { // More stars
                    this.particlesArray.push(new Particle(this));
                }
            }

            update() {
                this.ctx.clearRect(0, 0, this.width, this.height);
                this.ctx.globalAlpha = this.opacity; // Set global opacity
                for (let i = 0; i < this.particlesArray.length; i++) {
                    this.particlesArray[i].update();
                }
                this.ctx.globalAlpha = 1; // Reset global opacity
            }
        }

        const effect = new Effect(canvas.width, canvas.height, ctx);
        const animate = () => {
            effect.update();
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('mousemove', effect.handleMouseMove);
            window.removeEventListener('resize', effect.handleResize);
            window.removeEventListener('scroll', effect.handleScroll);
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};

export default Starlight;
