document.addEventListener('dragstart', (e) => {
    e.preventDefault(); // Отключает перетаскивание
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Отключает контекстное меню
});

// Отключение выделения при долгом нажатии на мобильных устройствах
document.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Предотвращает выделение
});








const DicePage = document.getElementById('dice-page');
const SlotPage = document.getElementById('slot-page');
const DartsPage = document.getElementById('darts-page');
const RepPage = document.getElementById('replenish-button');
const loader = document.getElementById('loader');
const DartsLogo = document.getElementById('darts-logo')
const DiceLogo = document.getElementById('dice-logo')
const SlotLogo = document.getElementById('slot-logo')



const playersAmountElements = document.querySelectorAll('.players-amount');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

playersAmountElements.forEach((element) => {
    const randomNumber = getRandomInt(5, 10); // Генерируем случайное число от 5 до 10
    element.textContent = randomNumber; // Устанавливаем текст элемента
});
















function when_page_start(callback) {
    
    place_coef();
    place_init_user_info();

    setInterval(() => {
        const tg_id = window.Telegram.WebApp.WebappInitData.user.id;
        info(tg_id);
    }, 10000);


    callback();
}

window.addEventListener('load', () => {
    when_page_start(() => {
        anime({
            targets: ['.loader'],
            opacity: [1, 0],
            duration: 800,
            delay: 1200,
            easing: 'easeInOutExpo',
            complete: () => {
                loader.classList.add('off');
            },
        });
    });
});

window.addEventListener('load', () => {
    anime({
        targets: ['.loader'],
        opacity: [1, 0],
        duration: 800,
        easing: 'easeInOutExpo',
        complete: () => {
            loader.classList.add('off');
        },
    });
});



if (window.Telegram.WebApp.initDataUnsafe) {
    place_coef();
    place_init_user_info();

    setInterval(() => {
        const tg_id = window.Telegram.WebApp.initDataUnsafe.user.id; // Получаем tg_id
        info(tg_id); // Передаем tg_id в функцию info
    }, 10000); // Обновляем данные каждые 10 секунд
}








RepPage.addEventListener('click', () => {
  window.location.href = 'replenishment.html';
});


DartsPage.addEventListener('click', () => {
    loader.classList.remove('off');
    DartsLogo.classList.add('on')
    anime({
        targets: ['.loader', '.darts-logo-cont'],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeInOutExpo',
        complete: () => {
          window.location.href = 'darts.html';
        },
      });
});

DicePage.addEventListener('click', () => {
    loader.classList.remove('off');
    DiceLogo.classList.add('on')
    anime({
        targets: ['.loader', '.dice-logo-cont'],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeInOutExpo',
        complete: () => {
          window.location.href = 'dice.html';
        },
      });
});

SlotPage.addEventListener('click', () => {
    loader.classList.remove('off');
    SlotLogo.classList.add('on')
    anime({
        targets: ['.loader', '.slot-logo-cont'],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeInOutExpo',
        complete: () => {
          window.location.href = 'slot.html';
        },
      });
});



const Community = document.getElementById('community');
const Support = document.getElementById('support');
const ref = document.getElementById('ref')


Community.addEventListener('click', () => {
  openCommunity()
});

Support.addEventListener('click', () => {
    openSupport()
  });


function openCommunity() {
    window.Telegram.WebApp.openTelegramLink("https://t.me/EmojiBetCommunity");
}

function openSupport() {
    window.Telegram.WebApp.openTelegramLink("https://t.me/EmojiBetSupportBot");
}



let isAnimating = false;
const faq = document.getElementById('faq')
faq.addEventListener('click', () => {
    if (isAnimating) return; // Если анимация уже идет, выходим из функции
    isAnimating = true; // Устанавливаем состояние анимации в true
    setTimeout(() => {

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-cont';
        errorDiv.id = 'faq-error';
        errorDiv.innerHTML = '<img src="assets/error-faq.svg" alt="Image" class="error-window">';
        document.body.appendChild(errorDiv);
        const faqError = document.getElementById('faq-error')
        faqError.addEventListener('click', () => {
        openSupport()
        });
        
        setTimeout(() => {
            anime({
                targets: errorDiv,
                translateY: ['15vw', '0'], // Движение вниз на 15vw
                duration: 400,
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                complete: () => {
                    setTimeout(() => {
                        anime({
                            targets: errorDiv,
                            translateY: ['0', '15vw'], // Возвращение на исходную позицию
                            duration: 400,
                            opacity: [1, 0],
                            easing: 'easeInOutQuad',
                            complete: () => {
                                errorDiv.remove();
                                isAnimating = false;
                            }
                        });
                    }, 2000);
                }
            });
        }, 0);
    }, 0);
})

ref.addEventListener('click', () => {
    if (isAnimating) return; // Если анимация уже идет, выходим из функции
    isAnimating = true; // Устанавливаем состояние анимации в true
    setTimeout(() => {

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-cont';
        errorDiv.id = 'error';
        errorDiv.innerHTML = '<img src="assets/error-ref.svg" alt="Image" class="error-window">';
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            anime({
                targets: errorDiv,
                translateY: ['15vw', '0'], // Движение вниз на 15vw
                duration: 400,
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                complete: () => {
                    setTimeout(() => {
                        anime({
                            targets: errorDiv,
                            translateY: ['0', '15vw'], // Возвращение на исходную позицию
                            duration: 400,
                            opacity: [1, 0],
                            easing: 'easeInOutQuad',
                            complete: () => {
                                errorDiv.remove();
                                isAnimating = false;
                            }
                        });
                    }, 2000);
                }
            });
        }, 0);
    }, 0);
})


































function place_coef() {
    
    fetch("https://ae77a1c50aa2e2.lhr.life/get_last_game", {
        method: 'GET', // Указываем метод GET
        headers: {
            'Content-Type': 'application/json' // Указываем тип контента (необязательно для GET-запроса)
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Преобразуем ответ в JSON
    })
    .then(data => {
        updateGames(data); // Обработка полученных данных
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });
}






function place_init_user_info() {

/*   const photoElement = document.getElementById('userPhoto');
    if (photoElement) {
        // Подставляем новый URL фотки
        photoElement.src = user.photo_url;
    } else {
        console.error('Элемент для фото не найден');
    }*/

    const tg_id = window.Telegram.WebApp.initDataUnsafe.user.id;
    const usernameElement = document.getElementById('username');

    if (usernameElement) {
        usernameElement.innerText = window.Telegram.WebApp.initDataUnsafe.user.username;
    } else {
        console.error('Элемент для имени пользователя не найден');
    }

    firstinfo(tg_id);
}


function firstinfo(tg_id) {
    fetch('https://ae77a1c50aa2e2.lhr.life/get_enter_info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Указываем тип контента
        },
        body: JSON.stringify({ 'tg_id': tg_id }) // Преобразуем объект в JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let newValue = data.balance;
        const UserBal = document.getElementById('balance');

        if (UserBal.innerText !== newValue) {
            UserBal.innerText = newValue;

            // Удаляем элемент с id "hider"
            const hiderElement = document.getElementById('hider');
            if (hiderElement) {
                hiderElement.remove();
            }

            // Устанавливаем opacity для всех элементов с классом "players-amount"
            const playersAmountElements = document.querySelectorAll('.players-amount');
            const playersElements = document.querySelectorAll('.players');
            playersAmountElements.forEach(element => {
                element.style.opacity = '1'; // Устанавливаем opacity в 1
            });
            playersElements.forEach(element => {
                element.style.opacity = '1'; // Устанавливаем opacity в 1
            });
        }
    })
    .catch((error) => {
        if (isAnimating) return; // Если анимация уже идет, выходим из функции
        isAnimating = true; // Устанавливаем состояние анимации в true

        setTimeout(() => {

            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-cont';
            errorDiv.id = 'error';
            errorDiv.innerHTML = '<img src="assets/error-all.svg" alt="Image" class="error-window">';
            document.body.appendChild(errorDiv);
            
            setTimeout(() => {
                anime({
                    targets: errorDiv,
                    translateY: ['15vw', '0'], // Движение вниз на 15vw
                    duration: 400,
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    complete: () => {
                        setTimeout(() => {
                            anime({
                                targets: errorDiv,
                                translateY: ['0', '15vw'], // Возвращение на исходную позицию
                                duration: 400,
                                opacity: [1, 0],
                                easing: 'easeInOutQuad',
                                complete: () => {
                                    errorDiv.remove();
                                    isAnimating = false;
                                }
                            });
                        }, 9500);
                    }
                });
            }, 0);
        }, 0);
    });
}


function info(tg_id) {
    fetch('https://ae77a1c50aa2e2.lhr.life/re_info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Указываем тип контента
        },
        body: JSON.stringify({ 'tg_id': tg_id }) // Преобразуем объект в JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let newValue = data.balance;
        const UserBal = document.getElementById('balance');

        if (UserBal.innerText !== newValue) {
            UserBal.innerText = newValue;
        }
    })
    .catch((error) => {
        if (isAnimating) return; // Если анимация уже идет, выходим из функции
        isAnimating = true; // Устанавливаем состояние анимации в true

        setTimeout(() => {

            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-cont';
            errorDiv.id = 'error';
            errorDiv.innerHTML = '<img src="assets/error-all.svg" alt="Image" class="error-window">';
            document.body.appendChild(errorDiv);
            
            setTimeout(() => {
                anime({
                    targets: errorDiv,
                    translateY: ['15vw', '0'], // Движение вниз на 15vw
                    duration: 400,
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    complete: () => {
                        setTimeout(() => {
                            anime({
                                targets: errorDiv,
                                translateY: ['0', '15vw'], // Возвращение на исходную позицию
                                duration: 400,
                                opacity: [1, 0],
                                easing: 'easeInOutQuad',
                                complete: () => {
                                    errorDiv.remove();
                                    isAnimating = false;
                                }
                            });
                        }, 9500);
                    }
                });
            }, 0);
        }, 0);
    });
}





function updateGames(last_game_list) {
    const blocks = document.querySelectorAll('.last-game');
    blocks.forEach((block, index) => {
        const gameData = last_game_list[`${index + 1}game`];
        const { Profit, user, data, game } = gameData;


        const gameInfo = block.querySelector('.game-info');
        gameInfo.textContent = `${user}`;


        const gameProfit = block.querySelector('.game-profit');
        gameProfit.innerHTML = `<span style="color: #a1a1a1;">+ </span>${Profit}`;


        const imagePath = (game) => {
            if (game === 'dice') {
                const GameName = document.querySelector('.game-name')
                GameName.textContent = 'Dice'
                return 'assets/dice-icon.svg';
            } else if (game === 'darts') {
                const GameName = document.querySelector('.game-name')
                GameName.textContent = 'Darts'
                return 'assets/darts-icon.svg';
            }
            return '';
        };
        const gamePlate = document.createElement('div');
        gamePlate.classList.add('game-plate')
        block.appendChild(gamePlate);

        const gameIcon = document.createElement('img');
        gameIcon.src = imagePath(game);
        gameIcon.alt = "Image";
        gameIcon.classList.add('game-icon');
        block.appendChild(gameIcon);

        const lastGameTether = document.createElement('img');
        gameIcon.src = 'assets/last-game-tether.svg';
        gameIcon.alt = "Image";
        gameIcon.classList.add('last-game-tether');
        block.appendChild(lastGameTether);
    });
}



