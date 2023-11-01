import { FormControl } from "@angular/forms";
import { map, startWith } from "rxjs/operators";

export class BaseComponent {
    languages = ['JavaScript', 'Java', 'C#', 'Python', 'C++'];

    inputControl = new FormControl('', { nonNullable: true });
  
    searchResults$ = this.inputControl.valueChanges.pipe(
      map((searchTerm) => this.findLanguagesBySearchTerm(searchTerm)),
      startWith([])
    );
  
    trackBy(index: number, item: any) {
      console.log(arguments);
      
      return item;
    }
  
    private findLanguagesBySearchTerm(searchTerm: string) {
      return this.languages.filter((language) =>
        language.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
}