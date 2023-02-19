import { ChangeDetectorRef, Component } from '@angular/core';
import { IRead, TypeCore } from './interfaces/read';
import { MeshiServiceService } from './services/meshi-service.service';
import { lastValueFrom } from 'rxjs';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meshiProject';
  public reads : IRead[];
  public chartSine: any;
  public chartState: any;
  public timesStampsState: Date[];
  public timesStampsSine: Date[];
  public valuesSine: number[];
  public valuesState: number[];
  constructor(private ReadsService: MeshiServiceService,private ref: ChangeDetectorRef) {
    this.reads= [];
    this.timesStampsSine=[];
    this.timesStampsState=[];
    this.valuesSine=[];
    this.valuesState=[];
 }
    async ngOnInit(): Promise<void> {
     var obs = this.ReadsService.getReads();
     this.reads = await lastValueFrom(obs);
      this.createChart();
      setInterval(async () => {
        var obs = this.ReadsService.getReads();
        this.reads = await lastValueFrom(obs);
         this.ref.markForCheck();
      },1000);
    } 
    
    createChart(){
      var r= this.reads.filter(r => r.type === "Sine");
      r.slice(r.length-100,r.length).forEach(read => {
        this.timesStampsSine.push(read.timestamp);
        this.valuesSine.push(read.value);
      });
      var s = this.reads.filter(r => r.type === "State");
      s.slice(s.length-100,s.length).forEach(read => {
        this.timesStampsState.push(read.timestamp);
        this.valuesState.push(read.value);  
      });
      
      this.chartSine = new Chart("ChartSine", {
        type: 'line', 
  
        data: {
          labels: this.timesStampsSine, 
           datasets: [
            {
              label: "Sine",
              data: this.valuesSine,
              backgroundColor: 'blue' 
            },
          
              {
                label: "lower bound",
                data: new Array(100).fill(0),
                backgroundColor: 'black' 
              },
              {
                label: "upper bound",
                data: new Array(100).fill(32),
                backgroundColor: 'black' 
              },

            ]
        },
        options: {
          aspectRatio:2.5
        },

      });
      this.chartState = new Chart("ChartState", {
        type: 'line', 
  
        data: {
          labels: this.timesStampsState, 
           datasets: [
            {
              label: "State",
              data: this.valuesState,
              backgroundColor: 'limegreen'
            },
            {
              label: "lower bound",
              data: new Array(100).fill(256),
              backgroundColor: 'black' 
            },
            {
              label: "upper bound",
              data: new Array(100).fill(4095),
              backgroundColor: 'black' 
            },

          ]
        },
        options: {
          aspectRatio:2.5
        }
        
      });
    }

  


}
