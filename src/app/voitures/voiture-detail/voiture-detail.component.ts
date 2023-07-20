import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from 'src/app/model/voiture.model';
import { VoituresService } from 'src/app/voitures.service';

@Component({
  selector: 'app-voiture-detail',
  templateUrl: './voiture-detail.component.html',
  styleUrls: ['./voiture-detail.component.css']
})
export class VoitureDetailComponent {
voiture? : Voiture;
constructor(private voitureService: VoituresService,/*utilser en cas depas activate route*/
  private router:Router,/*utilser en cas depas activate route*/
  private route :ActivatedRoute){}
  ngOnInit():void {
    /*this.route.params.pipe( switchMap((params)=>this.voitureService.getVoiture(+params['id'])))
    .subscribe(v=>this.voiture=v);*//*utilser en cas depas activate route*/
    this.route.data.subscribe(
      (data)=>this.voiture=data['voiture']
    );
  }
}
