import { ROOT_INDEX } from '../../constants/root';

import './Error.css';

class Error {
    render() {
        const htmlWrapper = `
            <div class="error__container">
                <p class="error__alert">
                    <span class="error__">Произошла ошибка.</span><br>
                    <span class="error__">Попробуйте зайти позже</span>
                </p>
            </div>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }

}

export default new Error();
