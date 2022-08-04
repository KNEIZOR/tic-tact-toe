let container = document.querySelector(".container");
let header;
let turn = true;
let os;
let resultO = [];
let xs;
let resultX = [];
let win;
let gameOver = true;
let conditionX;
let conditionO;
let result = [];
let draw;
let countX = 0;
let countO = 0;
let countPos
let hr
let rest

container.onmousedown = function () {
    return false;
};

container.addEventListener("click", function (event) {
    event.preventDefault();

    let reset = event.target.closest(".reset");

    if (reset) {
        clearTimeout(rest)
        countX = 0;
        countO = 0;
        turn = true;
        gameOver = true;
        resultO = [];
        resultX = [];
        result = [];
        container.innerHTML = `
        <div class="count">
                        <p><b class="p-x">x:</b> ${countX}</p> |
                        <p><b class="p-o">o:</b> ${countO}</p>
                    </div>
                    <h2 class="header">Сейчас очередь: <b class="p-x">X</b></h2>
                    <div class="cells">
                        <div class="hr"></div>
                    <div class="row">
                        <div class="col">
                            <div class="cell a1" data-cell="a1">
                            </div>
                        </div>
                        <div class="col">
                            <div class="cell a2" data-cell="a2">
                            </div>
                        </div>
                        <div class="col">
                            <div class="cell a3" data-cell="a3">
                                    
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col">
                            <div class="cell b1" data-cell="b1">

                            </div>
                        </div>
                        <div class="col">
                            <div class="cell b2" data-cell="b2">
                                    
                            </div>
                        </div>
                        <div class="col">
                            <div class="cell b3" data-cell="b3">
                                    
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="cell c1" data-cell="c1">

                            </div>
                        </div>
                        <div class="col">
                            <div class="cell c2" data-cell="c2">
                                    
                            </div>
                        </div>
                        <div class="col">
                            <div class="cell c3" data-cell="c3">
                                    
                            </div>
                        </div>
                    </div>
                    </div>
                    <input class="reset" type="submit" value="Перезапустить">`;
    }

    if (!gameOver) return;

    let cell = event.target.closest(".cell");

    header = container.querySelector(".header");
    countPos = document.querySelector('.count');
    hr = document.querySelector('.hr')

    if (!cell) return;

    if (cell.children.length !== 0) return;

    turnPlayer(cell);

    isWin();
});

function turnPlayer(cell) {
    let p = document.createElement("p");

    if (turn === true) {
        cell.classList.add("x");
        p.classList.add('p-x')
        p.innerHTML = "X";
        cell.appendChild(p);
        turn = false;
        header.innerHTML = `Сейчас очередь: <b class="p-o">O</b>`;
    } else {
        cell.classList.add("o");
        p.classList.add('p-o')
        p.innerHTML = "O";
        cell.appendChild(p);
        turn = true;
        header.innerHTML = `Сейчас очередь: <b class="p-x">X</b>`;
    }
}

function isWin() {
    for (const cell of document.querySelectorAll(".cell")) {
        if (cell.classList.contains("x")) {
            result.push(cell.dataset.cell);
            resultX.push(cell.dataset.cell);
        }
        xs = Array.from(new Set(resultX));

        if (cell.classList.contains("o")) {
            result.push(cell.dataset.cell);
            resultO.push(cell.dataset.cell);
        }
        xo = Array.from(new Set(resultO));

        draw = Array.from(new Set(result));
    }

    conditionX =
        (xs.includes("a1") && xs.includes("a2") && xs.includes("a3")) ||
        (xs.includes("b1") && xs.includes("b2") && xs.includes("b3")) ||
        (xs.includes("c1") && xs.includes("c2") && xs.includes("c3")) ||
        (xs.includes("a1") && xs.includes("b2") && xs.includes("c3")) ||
        (xs.includes("a3") && xs.includes("b2") && xs.includes("c1")) ||
        (xs.includes("a1") && xs.includes("b1") && xs.includes("c1")) ||
        (xs.includes("a2") && xs.includes("b2") && xs.includes("c2")) ||
        (xs.includes("a3") && xs.includes("b3") && xs.includes("c3"));

    conditionO =
        (xo.includes("a1") && xo.includes("a2") && xo.includes("a3")) ||
        (xo.includes("b1") && xo.includes("b2") && xo.includes("b3")) ||
        (xo.includes("c1") && xo.includes("c2") && xo.includes("c3")) ||
        (xo.includes("a1") && xo.includes("b2") && xo.includes("c3")) ||
        (xo.includes("a3") && xo.includes("b2") && xo.includes("c1")) ||
        (xo.includes("a1") && xo.includes("b1") && xo.includes("c1")) ||
        (xo.includes("a2") && xo.includes("b2") && xo.includes("c2")) ||
        (xo.includes("a3") && xo.includes("b3") && xo.includes("c3"));

    if (conditionX) {
        if(xs.includes("a1") && xs.includes("a2") && xs.includes("a3")){
            hr.style.display = 'initial';
            hr.style.top = '45px';
        }

        if(xs.includes("b1") && xs.includes("b2") && xs.includes("b3")){
            hr.style.display = 'initial';
            hr.style.top = '145px';
        }

        if(xs.includes("c1") && xs.includes("c2") && xs.includes("c3")){
            hr.style.display = 'initial';
            hr.style.top = '245px';
        }

        if(xs.includes("a1") && xs.includes("b1") && xs.includes("c1")){
            hr.style.display = 'initial';
            hr.style.top = '50%'
            hr.style.left = '-101px'
            hr.classList.add("rotate90")
        }

        if(xs.includes("a2") && xs.includes("b2") && xs.includes("c2")){
            hr.style.display = 'initial';
            hr.style.top = '50%'
            hr.style.left = '-1px'
            hr.classList.add("rotate90")
        }

        if(xs.includes("a3") && xs.includes("b3") && xs.includes("c3")){
            hr.style.display = 'initial';
            hr.style.top = '50%'
            hr.style.left = '101px'
            hr.classList.add("rotate90")
        }

        if(xs.includes("a1") && xs.includes("b2") && xs.includes("c3")){
            hr.style.display = 'initial';
            hr.style.top = '145px'
            hr.style.left = '-50px'
            hr.classList.add("rotate45")
        }

        if(xs.includes("a3") && xs.includes("b2") && xs.includes("c1")){
            hr.style.display = 'initial';
            hr.style.top = '145px'
            hr.style.left = '-50px'
            hr.classList.add("rotate135")
        }

        win = document.createElement("h1");
        win.classList.add("win");
        hr.style.color = "green"
        header.remove();
        win.innerHTML = `Победили <b class="p-x">X</b>`;
        countPos.after(win)
        gameOver = false;
        countX += 1;
        rest = setTimeout(() => {
            turn = true;
            resultO = [];
            resultX = [];
            result = [];
            container.innerHTML = `
        <div class="count">
                        <p><b class="p-x">x:</b> ${countX}</p> |
                        <p><b class="p-o">o:</b> ${countO}</p>
                    </div>
                    <h2 class="header">Сейчас очередь: <b class="p-x">X</b></h2>
                    <div class="cells">
                        <div class="hr"></div>
                    <div class="row">
                        <div class="col">
                            <div class="cell a1" data-cell="a1">
                            </div>
                        </div>
                        <div class="col">
                            <div class="cell a2" data-cell="a2">
                            </div>
                        </div>
                        <div class="col">
                            <div class="cell a3" data-cell="a3">
                                    
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col">
                            <div class="cell b1" data-cell="b1">

                            </div>
                        </div>
                        <div class="col">
                            <div class="cell b2" data-cell="b2">
                                    
                            </div>
                        </div>
                        <div class="col">
                            <div class="cell b3" data-cell="b3">
                                    
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="cell c1" data-cell="c1">

                            </div>
                        </div>
                        <div class="col">
                            <div class="cell c2" data-cell="c2">
                                    
                            </div>
                        </div>
                        <div class="col">
                            <div class="cell c3" data-cell="c3">
                                    
                            </div>
                        </div>
                    </div>
                    </div>
                    <input class="reset" type="submit" value="Перезапустить">`;
            gameOver = true;
        }, 3000);
        
        
    }
    if (conditionO) {
        if(xo.includes("a1") && xo.includes("a2") && xo.includes("a3")){
            hr.style.display = 'initial';
            hr.style.top = '45px';
        }

        if(xo.includes("b1") && xo.includes("b2") && xo.includes("b3")){
            hr.style.display = 'initial';
            hr.style.top = '145px';
        }

        if(xo.includes("c1") && xo.includes("c2") && xo.includes("c3")){
            hr.style.display = 'initial';
            hr.style.top = '245px';
        }

        if(xo.includes("a1") && xo.includes("b1") && xo.includes("c1")){
            hr.style.display = 'initial';
            hr.style.top = '50%'
            hr.style.left = '-101px'
            hr.classList.add("rotate90")
        }

        if(xo.includes("a2") && xo.includes("b2") && xo.includes("c2")){
            hr.style.display = 'initial';
            hr.style.top = '50%'
            hr.style.left = '-1px'
            hr.classList.add("rotate90")
        }

        if(xo.includes("a3") && xo.includes("b3") && xo.includes("c3")){
            hr.style.display = 'initial';
            hr.style.top = '50%'
            hr.style.left = '101px'
            hr.classList.add("rotate90")
        }

        if(xo.includes("a1") && xo.includes("b2") && xo.includes("c3")){
            hr.style.display = 'initial';
            hr.style.top = '145px'
            hr.style.left = '-50px'
            hr.classList.add("rotate45")
        }

        if(xo.includes("a3") && xo.includes("b2") && xo.includes("c1")){
            hr.style.display = 'initial';
            hr.style.top = '145px'
            hr.style.left = '-50px'
            hr.classList.add("rotate135")
        }

        win = document.createElement("h1");
        win.classList.add("win");
        hr.style.color = "red"
        header.remove();
        win.innerHTML = `Победили <b class="p-o">O</b>`;
        countPos.after(win)
        gameOver = false;
        countO += 1;
        rest = setTimeout(() => {
            turn = true;
            resultO = [];
            resultX = [];
            result = [];
            container.innerHTML = `
        <div class="count">
                        <p><b class="p-x">x:</b> ${countX}</p> |
                        <p><b class="p-o">o:</b> ${countO}</p>
                    </div>
                    <h2 class="header">Сейчас очередь: <b class="p-x">X</b></h2>
                    <div class="cells">
                        <div class="hr"></div>
                    <div class="row">
                        <div class="col">
                            <div class="cell a1" data-cell="a1">
                            </div>
                        </div>
                        <div class="col">
                            <div class="cell a2" data-cell="a2">
                            </div>
                        </div>
                        <div class="col">
                            <div class="cell a3" data-cell="a3">
                                    
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col">
                            <div class="cell b1" data-cell="b1">

                            </div>
                        </div>
                        <div class="col">
                            <div class="cell b2" data-cell="b2">
                                    
                            </div>
                        </div>
                        <div class="col">
                            <div class="cell b3" data-cell="b3">
                                    
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="cell c1" data-cell="c1">

                            </div>
                        </div>
                        <div class="col">
                            <div class="cell c2" data-cell="c2">
                                    
                            </div>
                        </div>
                        <div class="col">
                            <div class="cell c3" data-cell="c3">
                                    
                            </div>
                        </div>
                    </div>
                    </div>
                    <input class="reset" type="submit" value="Перезапустить">`;
            gameOver = true;
        }, 3000);
    }

    if (draw.length === 9) {
        if (!conditionX && !conditionO) {
            win = document.createElement("h1");
            win.classList.add("win");
            header.remove();
            win.innerHTML = `<b class="p-draw">Ничья</b>`;
            countPos.after(win)
            gameOver = false;
            rest = setTimeout(() => {
                turn = true;
                resultO = [];
                resultX = [];
                result = [];
                container.innerHTML = `
            <div class="count">
                            <p><b class="p-x">x:</b> ${countX}</p> |
                            <p><b class="p-o">o:</b> ${countO}</p>
                        </div>
                        <h2 class="header">Сейчас очередь: <b class="p-x">X</b></h2>
                        <div class="cells">
                            <div class="hr"></div>
                        <div class="row">
                            <div class="col">
                                <div class="cell a1" data-cell="a1">
                                </div>
                            </div>
                            <div class="col">
                                <div class="cell a2" data-cell="a2">
                                </div>
                            </div>
                            <div class="col">
                                <div class="cell a3" data-cell="a3">
                                        
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col">
                                <div class="cell b1" data-cell="b1">
    
                                </div>
                            </div>
                            <div class="col">
                                <div class="cell b2" data-cell="b2">
                                        
                                </div>
                            </div>
                            <div class="col">
                                <div class="cell b3" data-cell="b3">
                                        
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="cell c1" data-cell="c1">
    
                                </div>
                            </div>
                            <div class="col">
                                <div class="cell c2" data-cell="c2">
                                        
                                </div>
                            </div>
                            <div class="col">
                                <div class="cell c3" data-cell="c3">
                                        
                                </div>
                            </div>
                        </div>
                        </div>
                        <input class="reset" type="submit" value="Перезапустить">`;
                gameOver = true;
            }, 3000);
        }
    }
}
