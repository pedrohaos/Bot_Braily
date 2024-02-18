function init(){
    setTimeout(()=>{
        //const resposta = document.querySelector('div > div > div > div.AnswerBoxLayout-module__content--bMldb.AnswerBoxLayout-module__contentBlocked--MdVKu.AnswerBoxLayout-module__contentGradient--QQZqs > div > div > div > div')?.innerText || 'Resposta ocultada';
        
        const articleElement = document.querySelector('.js-main-question');
        
        const dataZValue = articleElement.getAttribute('data-z');
        
        const dataZObject = JSON.parse(dataZValue);
        
        const container = document.querySelector('.QuestionBoxLayout-module__box--DStBv');

        container?.insertAdjacentHTML('afterend', `

            <section class="container__resposta">
                ${dataZObject.responses[0].content}
            </section>
        
            `) || '';

            setTimeout(()=>{
                const btn = document.querySelector('.Tooltip-module__brn-tooltip-box--e8HHN.Tooltip-module__brn-tooltip-box--top-start-arrow-only--6j96W > div > div > button')
                btn?.click() || '';
            },1600)

    },1500)
}

init();