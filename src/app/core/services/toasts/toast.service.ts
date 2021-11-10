import { Injectable } from '@angular/core';
import {Toast} from "../../../model/Toast";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: Toast[] = []

  constructor() { }

  show(header: string, body: string) {
    this.toasts.push({
      header: header,
      body: body
    });
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
