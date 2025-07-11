
const components = [
    {
        box: 'cpuBox', modal: 'cpuModal'
    },
    {
        box: 'cmosBox', modal: 'cmosModal'
    },
    {
        box: 'storageBox', modal: 'storageModal'
    },
    {
        box: 'romBox', modal: 'romModal'
    },
    {
        box: 'ramBox', modal: 'ramModal'
    }
];


components.forEach(component => {
    const box = document.getElementById(component.box);
    const modal = document.getElementById(component.modal);
    const closeBtn = modal.querySelector('.close-btn');

    box.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});


