document.querySelectorAll('.select-box__select').forEach( select => select.addEventListener('click', (e) => {
    const dropdown = e.target.closest('.select-box').querySelector('.select-box__dropdown');
    dropdown.classList.toggle('opened');

    let selectedText = select.querySelector('.select-box__select-text');

    dropdown.addEventListener('click', (e) => {
            dropdown.classList.remove('opened');
            selectedText.textContent = e.target.textContent;

            // getPreviouslySelectedSibling(e.target, 'selected').classList.remove('selected');
            let previouslySelectedList = getPreviouslySelectedList(e.target, 'selected')[0].classList.remove('selected');
            e.target.classList.add('selected');

            // Below console.log return multiple times, why?
            // console.log(getPreviouslySelectedList(e.target, 'selected'));

            if (e.target.previousElementSibling) {
                selectedText.style.color = '#373737';
            } else {
                selectedText.style.color = '';
            }

            getSelectedOptionValue(e.target, '#select-box__language')
            
        });
}));

document.addEventListener('click', (e) => {
    

    // if ( !e.target.parentElement.classList.contains('select-box__select') && !e.target.parentElement.parentElement.classList.contains('select-box__dropdown') ) {
    //     document.querySelectorAll('.select-box__dropdown').forEach( dropdown => {
    //         dropdown.classList.remove('opened');
    //     })
    // }

    // if ( !e.target.matches('.select-box__dropdown li') && !e.target.parentElement.classList.contains('select-box__select') ) {
    //     document.querySelectorAll('.select-box__dropdown').forEach( dropdown => {
    //         dropdown.classList.remove('opened');
    //     })
    // }

    if ( !e.target.matches('.select-box__dropdown li') && !e.target.parentElement.classList.contains('select-box__select') ) {
        document.querySelectorAll('.select-box__dropdown').forEach( dropdown => {
            dropdown.classList.remove('opened');
        })
    }

    console.log(e.target);
});


function getPreviouslySelectedList(element, classname) {
    const children = [...element.parentElement.children];
    return children.filter(child => child.classList.contains(classname));
}

function getSelectedOptionValue(element, id) {
    let selectedListValue = element.textContent;
    const targetSelect = document.querySelector(id);
    const children = [...targetSelect.children];
    const targetOption = children.filter(child => child.textContent == selectedListValue);
    const targetValue = targetOption[0].value;
    
    console.log(targetValue);
    return targetValue;
    
}