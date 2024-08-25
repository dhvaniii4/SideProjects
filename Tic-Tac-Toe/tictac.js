const board = document.getElementById('board');
        const square = document.getElementsByClassName('square');
        const player = ['X', 'O'];
        let currentPlayer = player[0];
        const endMsg = document.createElement('h2');
        endMsg.textContent = `X's turn`;
        endMsg.style.marginTop = '20px';
        endMsg.style.textAlign = 'center';
        endMsg.style.fontFamily = 'Arial';
        board.after(endMsg)
        const win_combi = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];

        for(let i = 0; i<square.length; i++){
            square[i].addEventListener('click', () => {
                if(square[i].textContent !== ''){
                    return;
                }
                square[i].textContent = currentPlayer;
                square[i].style.fontSize = '30px';
                square[i].style.fontFamily = 'Arial';
                if(win(currentPlayer)){
                    endMsg.textContent = `Game Over! ${currentPlayer} wins!`;
                    return;
                }
                if(tie()){
                    endMsg.textContent = `It's A Tie!`;
                    return;
                }
                currentPlayer = (currentPlayer === player[0]) ? player[1] : player[0]
                if(currentPlayer === player[0]){
                    endMsg.textContent = `X's Turn`;
                } else {
                    endMsg.textContent =   `O's turn`;
                }
                
            })
        }

        function win(currentPlayer){
            for(let i = 0; i < win_combi.length; i++){
                const [a, b, c] = win_combi[i];
                if(square[a].textContent === currentPlayer && square[b].textContent === currentPlayer && square[c].textContent === currentPlayer){
                    return true;
                }
            }
            return false;
        }

        function tie(){
            for(let i = 0; i < square.length; i++){
                if(square[i].textContent === ''){
                    return false;
                }
            }
            return true;
        }

        function resetbtn(){
            for(let i = 0; i < square.length; i++){
                square[i].textContent = "";
            }
            endMsg.textContent = `X's turn`;
            currentPlayer = player[0];
        }