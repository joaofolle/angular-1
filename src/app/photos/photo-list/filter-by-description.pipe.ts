import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";
import { ifStmt } from "@angular/compiler/src/output/output_ast";

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {
   
    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
                .trim()
                .toLowerCase();
        if(descriptionQuery){
            return photos.filter(photo => 
                photo.description.toLowerCase().includes(descriptionQuery)
            );
        }else {
                return photos;  
        } 
    }
}