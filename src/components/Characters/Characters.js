import { IMG_STANDARD_XLARGE } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_MODAL } from '../../constants/root';

import './Characters.css';
import imgCloseWhite from '../../img/close-white.svg';

class Characters {
    renderContent(data) {
        let htmlContent = '';

        data.forEach(({name, thumbnail: {extension, path}}) => {
            const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

            htmlContent+= `
                <li class="characters__item">
                    <img class="characters__img" src=${imgSrc}>
                    <span class="characters__name">${name}</span>
                </li>
            `;
        });

        const htmlWrapper = `
            <div class="characters__wrapper">
                <button
                    class="characters__close"
                    onclick="modal.innerHTML = ''"
                    style="background-image: url(${imgCloseWhite})"
                ></button>
                <ul class="characters__container">
                    ${htmlContent}
                </ul>
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    renderNotification() {
        console.log('Данных нет');
    }

    async render(uri) {
        const data = await getDataApi.getData(uri);

        if (data.length) {
            this.renderContent(data);
        } else {
            this.renderNotification();
        }
    }
}

export default new Characters();
