import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [
    {title: 'Хлеб', status: true},
    {title: 'Молоко', status: true},
    {title: 'Картошка', status: true},
    {title: 'Лук', status: true},
    {title: 'Морковь', status: true},
    {title: 'Капуста', status: true},
    {title: 'Щавель', status: true},
  ];

  toggle(task) {
    task.status = !task.status;
  }

  remove(i) {
    this.tasks.splice(i, 1);
  }

  add(newTitle) {
    this.tasks.push({
      title: newTitle,
      status: true
    })
  }
}
