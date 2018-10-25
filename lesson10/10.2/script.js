class Option {
    constructor(height, width, bg, fontSize, textAlign) {   
        this.height = height + 'px';
        this.width = width + 'px';
        this.bg = bg;
        this.fontSize = fontSize + 'px';
        this.textAlign = textAlign;   
           }
       createDiv(text) {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = text;
        div.style.cssText = 
               `height:${this.height};
                width:${this.width};
                background:${this.bg};
                font-size:${this.fontSize};
                text-align:${this.textAlign};`
        
        
    }
}

let pain = new Option(20,40,'red',10,'center');

pain.createDiv('vff');
