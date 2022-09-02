import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import ModuleWordCloud from 'highcharts/modules/wordcloud';
ModuleWordCloud(Highcharts);
@Component({
  selector: 'app-pie-skill',
  templateUrl: './pie-skill.component.html',
  styleUrls: ['./pie-skill.component.less'],
})
export class PieSkillComponent implements OnInit {
  constructor() {}
  private data = [
    {name: 'JavaScript', weight: 6},
    {name: 'TypeScript', weight: 4},
    {name: 'CSS', weight: 3},
    {name: 'HTML', weight: 3},
    {name: 'Node', weight: 5},
    {name: 'Webpack', weight: 3.5},
    {name: 'Vue', weight: 8},
    {name: 'React', weight: 1},
    {name: 'Angular', weight: 2},
    {name: 'Nuxt.js', weight: 2},
    {name: 'Next.js', weight: 2},
    {name: 'vite', weight: 3},
  ];
  ngOnInit(): void {
    Highcharts.chart('pie-skill', {
      credits: {
        enabled: false
      },
      accessibility: {
        enabled: false,
        screenReaderSection: {
          beforeChartFormat:
            '<h5>{chartTitle}</h5>' +
            '<div>{chartSubtitle}</div>' +
            '<div>{chartLongdesc}</div>' +
            '<div>{viewTableButton}</div>',
        },
      },
      series: [
        {
          type: 'wordcloud',
          data: this.data,
          name: 'Skills',
        },
      ],
      title: {
        text: 'Wordcloud of My Skills',
      },
      subtitle: {
        text: 'The more you learn, the more you know',
      },
      tooltip: {
        headerFormat:
          '<span style="font-size: 16px"><b></b></span><br>',
      },
    });
  }
}
