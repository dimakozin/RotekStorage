<template>
  <div class="columns">
      <div class="column scheme">
        <div class="excel-db-import">
          <input type="file" @change="test"/>
        </div>
        <h1 class="title scheme-title">
          План размещения и нумерация стеллажей хранения в цехе
        </h1>
        <div class="scheme-image">
          <img src="/img/Scheme.png">
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  methods: { 
    exportDB() {
      const database = this.$store.getters.GET_ALL_SUBJECTS;
      this.downloadJSON('database.json', JSON.stringify(database))
    },
    downloadJSON(filename: string, text: string) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    },
    test(event: any) {
      let wb;
      const rABS = false

      const files = event.target.files
      if(!files){
        return
      }

      const file = files[0]

      const reader = new FileReader();
      reader.onload = (e) => {
        // @ts-ignore
        const data = e.target.result

        if(rABS){
          // @ts-ignore
          wb = XLSX.read(btoa(this.fixdata(data), {
            type: 'base64'
          }))
        } else {
          // @ts-ignore
          wb = XLSX.read(data, {
            type: 'binary'
          })
        }

        // @ts-ignore
        const jsondata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        let column = [] as Array<any>
        let d = [column]

        for(let key in jsondata[0]){
          d[0].push(key)
        }

        for(let i = 0; i < jsondata.length; i++){
          d.push([]);
          for(let key in jsondata[i]){
            d[i+1].push(jsondata[i][key])
          }
        }
        d.shift()


        d.forEach(item => {
          this.$store.dispatch("addNewSubject", {
            title: item[0],
            section: item[1],
            boxId: item[2],
            amount: item[3],
            comment: item[4]
          })
        })
      } 

      if(rABS){
        reader.readAsArrayBuffer(file)
      }
      else {
        reader.readAsBinaryString(file)
      }

    },
    fixdata(data: any){
      let o = '', l  = 0, w = 10240;
      // @ts-ignore
      for(; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
      // @ts-ignore
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)))
      return o
    }    
  },
})

export default class Help extends Vue {
  
}
</script>
<style scoped>
  .scheme{
    text-align: center;
  }
</style>