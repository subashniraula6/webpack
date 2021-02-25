import './heading.css'

class Heading {
    render() {
        const header = document.createElement('h1');
        header.innerHTML = "This is heading";
        header.classList.add('header')
        const body = document.querySelector('body');
        body.appendChild(header);
    }
}
export default Heading;