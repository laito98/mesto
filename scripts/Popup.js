export class Popup{
  constructor(SelectorPopup){
    this._popup = SelectorPopup;
    this._popupCloseButton = SelectorPopup.closeButton;
  }

  _getPopup(){
    const popup = document.querySelector('.popup');
    return popup;

  }
  handleOpenPopup (){
    this._popup.classList.add('.popup_opened');
  }

  closePopup(){
    this._popup.classList.remove('.popup_opened');
  }

    _setEventListeners(){
this._popupCloseButton.addEventListener('click', _closePopup);
  }
  }


   export class PopupWithImage extends Popup{
    constructor({name, link}, SelectorPopup){
      super(SelectorPopup),
      this._name = name,
      this._link = link,
      this._image = document.querySelector('.popup__img'),
      this._title = document.querySelector('.popup__title')
    }

    handleOpenPopupWithImage(){
      super.handleOpenPopup(),
      this._title.textContent = this._name,
      this._image.src = this._link,
      this._image.alt = this._name
    }
   }