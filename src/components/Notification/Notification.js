import { ROOT_MODAL } from '../../constants/root';

import './Notification.css';
import imgCloseBlack from '../../img/close-black.svg';

class Notification {
    render() {
        const htmlWrapper = `
            <div class="notification__container">
                <span>Данных нет</span>
                <button
                    class="notification__close"
                    onclick="modal.innerHTML = ''"
                    style="background-image: url(${imgCloseBlack})"
                ></button>
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }
}

export default new Notification();
