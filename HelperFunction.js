function SetPixel(ctx, x, y, color){
    ctx.fillStyle  = color;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 0.2, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

class ComplexNumber{
    constructor(real=0, imag=0){
        this.real = real;
        this.imag = imag;
    }

    abs(){
        return Math.sqrt((this.real)**2+(this.imag)**2);
    }

    Cong(new_z){
        let a = new ComplexNumber();
        a.real = this.real + new_z.real;
        a.imag = this.imag + new_z.imag;
        return a;
    }

    Nhan(new_z){
        let a = new ComplexNumber();
        a.real = this.real * new_z.real - this.imag * new_z.imag;
        a.imag = this.real * new_z.imag + this.imag * new_z.real;
        return a;
    }
}
//export {SetPixel};