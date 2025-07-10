// Select all components
const infoBox = document.getElementById('infoBox');

document.querySelector('.cpu').addEventListener('click', () => {
    infoBox.innerHTML = "CPU : It's the brain of the computer where most calculations take place.";
});

document.querySelector('.cmos').addEventListener('click', () => {
    infoBox.innerHTML = "CMOS : It's a battery-powered chip that stores BIOS settings.";
});

document.querySelector('.storage').addEventListener('click', () => {
    infoBox.innerHTML = "Storage Device: It stores all data permanently, including the operating system, apps, and files.";
});

document.querySelector('.rom').addEventListener('click', () => {
    infoBox.innerHTML = "ROM : It contains the firmware or BIOS, essential for booting the computer.";
});

document.querySelector('.ram').addEventListener('click', () => {
    infoBox.innerHTML = "RAM: It's temporary memory used by the computer to store data for running programs.";
});
