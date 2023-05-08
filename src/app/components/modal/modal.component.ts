import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BcModalComponent } from '@bancolombia/design-system-web/bc-modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit {
  //  El componente modal tiene a su disposición 3 contenedores con las siguientes clases: illustration, modalContent y modalFooter,
  //  dentro de cada uno de ellos y dependiendo del diseño del modal, se puede agregar cualquier tipo de html.
  action = false;
  typeIcon: 'error' | 'success' | 'warning' | 'info' | 'default' = 'default';
  customWidth: 'small' | 'medium' | 'large' = 'medium';
  titleAlign: 'center' | 'left' = 'left';
  buttonAlignment: 'horizontal' | 'vertical' = 'vertical';
  selectedValue = '';
  subTitle = '';
  @ViewChild('exampleModal') modal!: BcModalComponent;
  @ViewChild('.bc-modal-title') modalTitle!: HTMLElement;

  onPressButton(value: number) {}

  openModal() {
    this.modal.openModal();
  }

  ngAfterViewInit(): void {
    console.log(this.modal);
    console.log(this.modalTitle);
  }
}
