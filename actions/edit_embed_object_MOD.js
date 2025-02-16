module.exports = {
  name: 'Edit Embed Object MOD',
  section: 'Embed Message',
  meta: {
    version: '2.1.7',
    preciseCheck: true,
    author: '[XinXyla - 172782058396057602]',
    authorUrl: 'https://github.com/DBM-Mods/Portugues',
    downloadURL: 'https://github.com/DBM-Mods/Portugues/archive/refs/heads/main.zip',
  },

  subtitle(data, presets) {

    if(data.descriptionx == true){
      desccor = data.descriptioncolor
      } else {
        desccor = 'none'
      }

    const storage = presets.variables;

    return data.description
    ? `<font style="color:${desccor}">${data.descriptionsub}</font>`
    : `<font style="color:${desccor}">${storage[parseInt(data.storage, 10)]} (${data.varName})</font>`
  },

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName, 'Embed Object'];
  },

  fields: [
    'storage',
    'varName',
    'Edit0',
    'Edit1',
    'Edit2',
    'Edit3',
    'Edit4',
    'Edit5',
    'Edit6',
    'Edit7',
    'Edit8',
    'Edit9',
    'Edit10',
    'Edit11',
    'Edit12',
    'title',
    'url',
    'description',
    'color',
    'imageUrl',
    'imageUrl2',
    'thumbUrl',
    'thumbUrl2',
    'author',
    'authorUrl',
    'authorIcon',
    'footer',
    'footerIcon',
    'timestamp',
    'fieldNum',
    'fieldName',
    'fieldDescription',
    'fieldInline',
    , 'descriptioncolor', 'descriptionsub', 'descriptionx',
  ],

  html(_isEvent, data) {
    return `
    <div class="dbmmodsbr1 xinelaslink" data-url="https://github.com/DBM-Mods/Portugues/archive/refs/heads/main.zip">Atualizar</div>
    <div class="dbmmodsbr2 xinelaslink" data-url="https://github.com/DBM-Mods/Portugues">Versão 0.5</div>

    <div style="width: 100%; padding:5px 5px;height: calc(100vh - 160px);overflow:auto">

    <div id="flutuador" style="padding:0px 0px 15px 0px">
<table style="width:100%;"><tr>
<td><span class="dbminputlabel">Descrição da Action</span><br><input type="text" class="round" id="descriptionsub" placeholder="Deixe vazio para remover"></td>
<td style="padding:0px 0px 0px 10px;width:70px"><div style="float:left;padding:0px 0px 0px 7px;margin-top:-5px"><dbm-checkbox id="descriptionx" label="Cor"></dbm-checkbox></div><br><input type="color" value="#ffffff" class="round" id="descriptioncolor"></td>
</tr></table>
</div>


  <div style="padding-top: 8px;">
    <div style="float: left; width: 40%;">
    <span class="dbminputlabel">Embed Objeto</span><br>
      <select id="storage" class="round" onchange="glob.refreshVariableList(this)">
        ${data.variables[1]}
      </select>
    </div>
    <div style="float: right; width: 55%;">
    <span class="dbminputlabel">Nome da Variavel</span><br>
      <input id="varName" placeholder="Embed Object" class="round" type="text" list="variableList" oninput="glob.onChange13(this)">
    </div>
  </div><br><br><br>
  <div style="padding-top: 8px;">
    <div style="float: left; width: 40%;">
    <span class="dbminputlabel">Editar titulo</span><br>
      <select id="Edit0" class="round" onchange="glob.onChange0(this)">
        <option value="0" selected>Manter conteúdo</option>
        <option value="1">Editar conteúdo</option>
        <option value="2">Limpar conteúdo</option>
      </select>
    </div>
    <div id="Input0" style="display: none; float: right; width: 55%;">
    <span class="dbminputlabel">Titulo</span><br>
      <input id="title" class="round" type="text">
    </div>
  </div><br><br><br>
  <div style="padding-top: 8px;">
    <div style="float: left; width: 40%;">
    <span class="dbminputlabel">Editar URL</span><br>
      <select id="Edit1" class="round" onchange="glob.onChange1(this)">
        <option value=0 selected>Manter conteúdo</option>
        <option value=1>Editar conteúdo</option>
        <option value=2>Limpar conteúdo</option>
      </select>
    </div>
    <div id="Input1" style="display: none; float: right; width: 55%;">
    <span class="dbminputlabel">URL</span><br>
      <input id="url" class="round" type="text">
    </div>
  </div><br><br><br>
  <div style="padding-top: 8px;">
    <div style="width: 40%;">
    <span class="dbminputlabel">Editar descrição</span><br>
      <select id="Edit2" class="round" onchange="glob.onChange2(this)">
        <option value=0 selected>Manter conteúdo</option>
        <option value=1>Editar conteúdo</option>
        <option value=2>Limpar conteúdo</option>
      </select>
    </div>
    <div id="Input2" style="display: none; width: 100%;">
    <br><span class="dbminputlabel">Descrição</span><br>
    <textarea id="description" rows="3" style="width: 100%; font-family: monospace; white-space: nowrap; resize: yes;"></textarea>
    </div>
  </div><br>
  <div style="padding-top: 8px;">
    <div style="float: left; width: 40%;">
    <span class="dbminputlabel">Editar Cor</span><br>
      <select id="Edit3" class="round" onchange="glob.onChange3(this)">
        <option value=0 selected>Manter conteúdo</option>
        <option value=1>Editar conteúdo</option>
        <option value=2>Limpar conteúdo</option>
      </select>
    </div>
    <div id="Input3" style="display: none; float: right; width: 55%;">
    <span class="dbminputlabel">Cor</span><br>
    <table style="width:100%"><tr><td><input id="color" name="actionxinxyla" class="round" type="text"><td>
    <td style="width:40px;text-align:center;padding:4px"><a id="btr1" style="cursor:pointer" onclick="(function(){
      document.getElementById('color').type = 'color'
      document.getElementById('btr1').style.display = 'none';
      document.getElementById('btr2').style.display = 'block';
      })()"><button class="tiny compact ui icon button">Cor</button></a><a id="btr2" style="cursor:pointer;display:none" onclick="(function(){
        document.getElementById('color').type = 'text';
        document.getElementById('btr1').style.display = 'block';
        document.getElementById('btr2').style.display = 'none';
        })()"><button class="tiny compact ui icon button">Texto</button></a><td></tr></table>
    </div>
  </div><br><br><br>
  <div style="padding-top: 8px;">
    <div style="float: left; width: 40%;">
    <span class="dbminputlabel">Editar URL da Imagem</span><br>
      <select id="Edit4" class="round" onchange="glob.onChange4(this)">
        <option value=0 selected>Manter conteúdo</option>
        <option value=1>Editar conteúdo</option>
        <option value=2>Limpar conteúdo</option>
        <option value=3>Editar conteúdo (Local)</option>
      </select>
    </div>
    <div id="Input4" style="display: none; float: right; width: 55%;">
      <div id="Input4placeholder"><span class="dbminputlabel">URL da Imagem</span></div>
      <input id="imageUrl" class="round" type="text">
    </div>
  </div><br><br><br>
  <div id="Input4a" style="display: none; padding-top: 8px;">
  <div style="float: left; width: 105%;">
  <span class="dbminputlabel">Nome com extensão</span><br>
      <input id="imageUrl2" class="round" type="text" placeholder="name.extension">
    </div><br><br><br>
  </div>
  <div style="padding-top: 8px;">
    <div style="float: left; width: 40%;">
    <span class="dbminputlabel">Editar Thumbnail URL</span><br>
      <select id="Edit5" class="round" onchange="glob.onChange5(this)">
        <option value=0 selected>Manter conteúdo</option>
        <option value=1>Editar conteúdo</option>
        <option value=2>Limpar conteúdo</option>
        <option value=3>Editar conteúdo (Local)</option>
      </select>
    </div>
    <div id="Input5" style="display: none; float: right; width: 55%;">
      <div id="Input5placeholder"><span class="dbminputlabel">Thumbnail URL</span></div>
      <input id="thumbUrl" class="round" type="text">
    </div>
  </div><br><br><br>
  <div id="Input5a" style="display: none; padding-top: 8px;">
    <div style="float: left; width: 105%;">
    <span class="dbminputlabel">Nome com extensão</span><br>
      <input id="thumbUrl2" class="round" type="text" placeholder="name.extension">
    </div><br><br><br>
  </div>
  <div style="padding-top: 8px;">
    <div style="float: left; width: 40%;">
    <span class="dbminputlabel">Editar nome do autor</span><br>
      <select id="Edit6" class="round" onchange="glob.onChange6(this)">
        <option value=0 selected>Manter conteúdo</option>
        <option value=1>Editar conteúdo</option>
        <option value=2>Limpar conteúdo</option>
      </select>
    </div>
    <div id="Input6" style="display: none; float: right; width: 55%;">
    <span class="dbminputlabel">Nome do autor</span><br>
      <input id="author" class="round" type="text">
    </div>
  </div><br><br><br>
  <div style="padding-top: 8px;">
    <div style="float: left; width: 40%;">
    <span class="dbminputlabel">Editar URL do autor</span><br>
      <select id="Edit7" class="round" onchange="glob.onChange7(this)">
        <option value=0 selected>Manter conteúdo</option>
        <option value=1>Editar conteúdo</option>
        <option value=2>Limpar conteúdo</option>
      </select>
    </div>
    <div id="Input7" style="display: none; float: right; width: 55%;">
    <span class="dbminputlabel">URL do autor</span><br>
      <input id="authorUrl" class="round" type="text">
    </div>
  </div><br><br><br>
  <div style="padding-top: 8px;">
    <div style="float: left; width: 40%;">
    <span class="dbminputlabel">Editar Icone URL do autor</span><br>
      <select id="Edit8" class="round" onchange="glob.onChange8(this)">
        <option value=0 selected>Manter conteúdo</option>
        <option value=1>Editar conteúdo</option>
        <option value=2>Limpar conteúdo</option>
      </select>
    </div>
    <div id="Input8" style="display: none; float: right; width: 55%;">
    <span class="dbminputlabel">Icone URL do autor</span><br>
      <input id="authorIcon" class="round" type="text">
    </div>
  </div><br><br><br>
  <div style="padding-top: 8px;">
  <div style="width: 40%;">
  <span class="dbminputlabel">Editar Footer</span><br>
    <select id="Edit9" class="round" onchange="glob.onChange9(this)">
      <option value=0 selected>Manter conteúdo</option>
      <option value=1>Editar conteúdo</option>
      <option value=2>Limpar conteúdo</option>
    </select>
  </div><br>
  <div id="Input9" style="display: none; width: 100%;">
  <span class="dbminputlabel">Footer</span><br>
    <textarea id="footer" rows="3" style="width: 100%; font-family: monospace; white-space: nowrap; resize: yes;"></textarea><br>
  </div>
</div>
<div style="padding-top: 8px;">
  <div style="float: left; width: 40%;">
  <span class="dbminputlabel">Editar Icone URL do Footer</span><br>
    <select id="Edit10" class="round" onchange="glob.onChange10(this)">
      <option value=0 selected>Manter conteúdo</option>
      <option value=1>Editar conteúdo</option>
      <option value=2>Limpar conteúdo</option>
    </select>
  </div>
  <div id="Input10" style="display: none; float: right; width: 55%;">
  <span class="dbminputlabel">Footer Icone URL</span><br>
    <input id="footerIcon" class="round" type="text">
  </div>
</div><br><br><br>
  <div style="padding-top: 8px;">
    <div style="float: left; width: 40%;">
    <span class="dbminputlabel">Editar Timestamp</span><br>
      <select id="Edit11" class="round" onchange="glob.onChange11(this)">
        <option value=0 selected>Manter conteúdo</option>
        <option value=1>Editar para o Timestamp atual</option>
        <option value=2>Editar para o Timestamp da string</option>
        <option value=3>Limpar conteúdo</option>
      </select>
    </div>
    <div id="Input11" style="display: none; float: right; width: 55%;">
    <span class="dbminputlabel">URL Timestamp</span><br>
      <input id="timestamp" class="round" type="text">
    </div>
  </div><br><br><br>
  <div style="padding-top: 8px;">
    <div style="float: left; width: 40%;">
    <span class="dbminputlabel">Editar Field</span><br>
      <select id="Edit12" class="round" onchange="glob.onChange12(this)">
        <option value=0 selected>Manter conteúdo</option>
        <option value=1>Editar conteúdo</option>
        <option value=2>Delete Field</option>
        <option value=3>Delete All Fields</option>
        <option value=4>Add Field</option>
      </select><br>
    </div>
    <div id="Input12" style="display: none; float: right; width: 55%;">
    <span class="dbminputlabel">Número da Field</span><br>
      <input id="fieldNum" class="round" type="text"><br>
    </div>
  </div><br><br><br>
  <div id="Input13" style="display: none;">
    <div style="float: left; width: 60%;">
    <span class="dbminputlabel">Editar Nome da Field</span><br>
      <input id="fieldName" class="round" type="text"><br>
    </div>
    <div style="float: right; width: 35%;">
    <span class="dbminputlabel">Editar Field em linha?</span><br>
      <select id="fieldInline" class="round">
        <option value=0 selected>Manter em linha</option>
        <option value=1>Sim</option>
        <option value=2>Não</option>
      </select><br>
    </div><br><br><br><br>
    <div style="width: 100%;">
    <span class="dbminputlabel">Editar Valor da Field</span><br>
      <textarea id="fieldDescription" rows="3" style="width: 100%; font-family: monospace; white-space: nowrap; resize: yes;"></textarea>
    </div>
  
  </div>


</div>

<style>

.dbmmodsbr1{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;left:0px;z-index:999999;cursor:pointer}
.dbmmodsbr2{position:absolute;bottom:0px;border: 0px solid rgba(50,50,50,0.7);background:rgba(0,0,0,0.7);color:#999;padding:5px;right:0px;z-index:999999;cursor:pointer}

</style>`;
  },

  init() {
    const { glob, document } = this;

    const xinelaslinks = document.getElementsByClassName('xinelaslink');
    for (let x = 0; x < xinelaslinks.length; x++) {
      const xinelaslink = xinelaslinks[x];
      const url = xinelaslink.getAttribute('data-url');
      if (url) {
       xinelaslink.setAttribute('title', url);
       xinelaslink.addEventListener('click', (e) => {
          e.stopImmediatePropagation();
          console.log(`Launching URL: [${url}] in your default browser.`);
          require('child_process').execSync(`start ${url}`);
        });
      }
    }


    const Input0 = document.getElementById('Input0');
    const Input1 = document.getElementById('Input1');
    const Input2 = document.getElementById('Input2');
    const Input3 = document.getElementById('Input3');
    const Input4 = document.getElementById('Input4');
    const Input4a = document.getElementById('Input4a');
    const Input4placeholder = document.getElementById('Input4placeholder');
    const Input5 = document.getElementById('Input5');
    const Input5a = document.getElementById('Input5a');
    const Input5placeholder = document.getElementById('Input5placeholder');
    const Input6 = document.getElementById('Input6');
    const Input7 = document.getElementById('Input7');
    const Input8 = document.getElementById('Input8');
    const Input9 = document.getElementById('Input9');
    const Input10 = document.getElementById('Input10');
    const Input11 = document.getElementById('Input11');
    const Input12 = document.getElementById('Input12');
    const Input13 = document.getElementById('Input13');
    const fieldInline = document.getElementById('fieldInline');

    glob.onChange0 = function onChange0(Edit0) {
      switch (parseInt(Edit0.value, 10)) {
        case 0:
        case 2:
          Input0.style.display = 'none';
          break;
        case 1:
          Input0.style.display = null;
          break;
      }
    };
    glob.onChange1 = function onChange1(Edit1) {
      switch (parseInt(Edit1.value, 10)) {
        case 0:
        case 2:
          Input1.style.display = 'none';
          break;
        case 1:
          Input1.style.display = null;
          break;
      }
    };
    glob.onChange2 = function onChange2(Edit2) {
      switch (parseInt(Edit2.value, 10)) {
        case 0:
        case 2:
          Input2.style.display = 'none';
          break;
        case 1:
          Input2.style.display = null;
          break;
      }
    };
    glob.onChange3 = function onChange3(Edit3) {
      switch (parseInt(Edit3.value, 10)) {
        case 0:
        case 2:
          Input3.style.display = 'none';
          break;
        case 1:
          Input3.style.display = null;
          break;
      }
    };
    glob.onChange4 = function onChange4(Edit4) {
      switch (parseInt(Edit4.value, 10)) {
        case 0:
        case 2:
          Input4.style.display = 'none';
          Input4a.style.display = 'none';
          break;
        case 1:
          Input4.style.display = null;
          Input4placeholder.innerHTML = 'Image URL:';
          document.getElementById('imageUrl').value = '';
          Input4a.style.display = 'none';
          break;
        case 3:
          Input4.style.display = null;
          Input4placeholder.innerHTML = 'Local Path:';
          document.getElementById('imageUrl').value = './resources';
          Input4a.style.display = null;
          break;
      }
    };
    glob.onChange5 = function onChange5(Edit5) {
      switch (parseInt(Edit5.value, 10)) {
        case 0:
        case 2:
          Input5.style.display = 'none';
          Input5a.style.display = 'none';
          break;
        case 1:
          Input5.style.display = null;
          Input5placeholder.innerHTML = 'URL da Imagem:';
          document.getElementById('thumbUrl').value = '';
          Input5a.style.display = 'none';
          break;
        case 3:
          Input5.style.display = null;
          Input5placeholder.innerHTML = 'Caminho local:';
          document.getElementById('thumbUrl').value = './resources';
          Input5a.style.display = null;
          break;
      }
    };
    glob.onChange6 = function onChange6(Edit6) {
      switch (parseInt(Edit6.value, 10)) {
        case 0:
        case 2:
          Input6.style.display = 'none';
          break;
        case 1:
          Input6.style.display = null;
          break;
      }
    };
    glob.onChange7 = function onChange7(Edit7) {
      switch (parseInt(Edit7.value, 10)) {
        case 0:
        case 2:
          Input7.style.display = 'none';
          break;
        case 1:
          Input7.style.display = null;
          break;
      }
    };
    glob.onChange8 = function onChange8(Edit8) {
      switch (parseInt(Edit8.value, 10)) {
        case 0:
        case 2:
          Input8.style.display = 'none';
          break;
        case 1:
          Input8.style.display = null;
          break;
      }
    };
    glob.onChange9 = function onChange9(Edit9) {
      switch (parseInt(Edit9.value, 10)) {
        case 0:
        case 2:
          Input9.style.display = 'none';
          break;
        case 1:
          Input9.style.display = null;
          break;
      }
    };
    glob.onChange10 = function onChange10(Edit10) {
      switch (parseInt(Edit10.value, 10)) {
        case 0:
        case 2:
          Input10.style.display = 'none';
          break;
        case 1:
          Input10.style.display = null;
          break;
      }
    };
    glob.onChange11 = function onChange11(Edit11) {
      switch (parseInt(Edit11.value, 10)) {
        case 0:
        case 1:
        case 3:
          Input11.style.display = 'none';
          break;
        case 2:
          Input11.style.display = null;
          break;
      }
    };

    glob.onChange12 = function onChange12(Edit12) {
      switch (parseInt(Edit12.value, 10)) {
        case 0:
        case 3:
          Input12.style.display = 'none';
          Input13.style.display = 'none';
          break;
        case 1:
          Input12.style.display = null;
          Input13.style.display = null;
          if (fieldInline.length !== 3) {
            const option = document.createElement('option');
            option.value = 0;
            option.innerHTML = 'Manter em linha';
            fieldInline.prepend(option);
          }
          break;
        case 2:
          Input12.style.display = null;
          Input13.style.display = 'none';
          break;
        case 4:
          Input12.style.display = null;
          Input13.style.display = null;
          if (fieldInline.length === 3) {
            fieldInline.remove(0);
          }
          break;
      }
    };

    const varName = document.getElementById('varName');
    function filter(dataType) {
      for (let i = 0; i < dataType.length; i++) {
        if (dataType[i].value === varName.value) {
          return dataType[i];
        }
      }
    }

    glob.onChange13 = function onChange13() {
      const list = document.getElementById('variableList');
      if (list.children.length === 0) return;
      const dataType = list.options;
    };
    glob.onChange13(varName);

    glob.onChange0(document.getElementById('Edit0'));
    glob.onChange1(document.getElementById('Edit1'));
    glob.onChange2(document.getElementById('Edit2'));
    glob.onChange3(document.getElementById('Edit3'));
    glob.onChange4(document.getElementById('Edit4'));
    glob.onChange5(document.getElementById('Edit5'));
    glob.onChange6(document.getElementById('Edit6'));
    glob.onChange7(document.getElementById('Edit7'));
    glob.onChange8(document.getElementById('Edit8'));
    glob.onChange9(document.getElementById('Edit9'));
    glob.onChange10(document.getElementById('Edit10'));
    glob.onChange11(document.getElementById('Edit11'));
    glob.onChange12(document.getElementById('Edit12'));
  },

  async action(cache) {
    const data = cache.actions[cache.index];
    const storage = parseInt(data.storage, 10);
    const varName = this.evalMessage(data.varName, cache);
    const embed = this.getVariable(storage, varName, cache);
    if (!embed) return this.callNextAction(cache);

    try {

      const Edit0 = parseInt(data.Edit0, 10);
      const Edit1 = parseInt(data.Edit1, 10);
      const Edit2 = parseInt(data.Edit2, 10);
      const Edit3 = parseInt(data.Edit3, 10);
      const Edit4 = parseInt(data.Edit4, 10);
      const Edit5 = parseInt(data.Edit5, 10);
      const Edit6 = parseInt(data.Edit6, 10);
      const Edit7 = parseInt(data.Edit7, 10);
      const Edit8 = parseInt(data.Edit8, 10);
      const Edit9 = parseInt(data.Edit9, 10);
      const Edit10 = parseInt(data.Edit10, 10);
      const Edit11 = parseInt(data.Edit11, 10);
      const Edit12 = parseInt(data.Edit12, 10);
      const title = this.evalMessage(data.title, cache);
      const url = this.evalMessage(data.url, cache);
      const description = this.evalMessage(data.description, cache);
      const color = this.evalMessage(data.color, cache);
      const imageUrl = this.evalMessage(data.imageUrl, cache);
      const imageUrl2 = this.evalMessage(data.imageUrl2, cache);
      const thumbUrl = this.evalMessage(data.thumbUrl, cache);
      const thumbUrl2 = this.evalMessage(data.thumbUrl2, cache);
      const author = this.evalMessage(data.author, cache);
      const authorUrl = this.evalMessage(data.authorUrl, cache);
      const authorIcon = this.evalMessage(data.authorIcon, cache);
      var footer = this.evalMessage(data.footer, cache);
      var footerIcon = this.evalMessage(data.footerIcon, cache) || null;
      const timestamp = this.evalMessage(data.timestamp, cache);
      const fieldNum = parseInt(this.evalMessage(data.fieldNum, cache), 10);
      const fieldName = this.evalMessage(data.fieldName, cache) || '\u200B';
      const fieldDescription = this.evalMessage(data.fieldDescription, cache) || '\u200B';
      const fieldInline = parseInt(data.fieldInline, 10);
      switch (Edit0) {
        case 1:
          embed.setTitle(title);
          break;
        case 2:
          embed.title = undefined;
          break;
        default:
          break;
      }
      switch (Edit1) {
        case 1:
          embed.setURL(url);
          break;
        case 2:
          embed.url = undefined;
          break;
        default:
          break;
      }
      switch (Edit2) {
        case 1:
          embed.setDescription(description);
          break;
        case 2:
          embed.description = undefined;
          break;
        default:
          break;
      }
      switch (Edit3) {
        case 1:
          embed.setColor(color);
          break;
        case 2:
          embed.color = undefined;
          break;
        default:
          break;
      }
      switch (Edit4) {
        case 1:
          embed.setImage(imageUrl);
          break;
        case 2:
          embed.image = undefined;
          break;
        case 3:
          embed.attachFiles([`${imageUrl}/${imageUrl2}`]);
          embed.setImage(`attachment://${imageUrl2}`);
          break;
        default:
          break;
      }
      switch (Edit5) {
        case 1:
          embed.setThumbnail(thumbUrl);
          break;
        case 2:
          embed.thumbnail = undefined;
          break;
        case 3:
          embed.attachFiles([`${thumbUrl}/${thumbUrl2}`]);
          embed.setImage(`attachment://${thumbUrl2}`);
          break;
        default:
          break;
      }
      if (embed.author === undefined) {
        if (Edit6 === 1 && author !== undefined) {
          embed.setAuthor({name: author});
          if (Edit7 === 1 && authorUrl !== undefined) {
            embed.author.url = authorUrl;
          }
          if (Edit8 === 1 && authorIcon !== undefined) {
            embed.author.iconURL = authorIcon;
          }
        }
      } else {
        if (author !== undefined && Edit6 === 1) {
          embed.setAuthor({name: author});
        } else if (Edit6 === 2) {
          embed.author.name = undefined;
        }
        if (authorUrl !== undefined && Edit7 === 1 && embed.author !== undefined) {
          embed.author.url = authorUrl;
        } else if (Edit7 === 2) {
          embed.author.url = undefined;
        }
        if (authorIcon !== undefined && Edit8 === 1 && embed.author !== undefined) {
          embed.author.iconURL = authorIcon;
        } else if (Edit8 === 2) {
          embed.author.iconURL = undefined;
        }
      }



      if (embed.footer === undefined) {
        if (Edit9 === 1 && footer !== undefined) {
          embed.setFooter({text: footer});
          if (Edit10 === 1 && footerIcon !== undefined) {
            embed.footer.iconURL = footerIcon;
          }
        }
      } else {
        if (footer !== undefined && Edit9 === 1) {
          embed.setFooter({text: footer})
        } else if (Edit9 !== 0) {
          embed.footer.text = undefined;
        }
        if (footerIcon !== undefined && Edit10 === 1) {
          embed.footer.iconURL = footerIcon;
        } else if (Edit10 !== 0) {
          embed.footer.iconURL = undefined;
        }
      }
      switch (Edit10) {
        case 1:
          embed.footer.iconURL = footerIcon;
          break;
        case 2:
          embed.footer.iconURL = undefined;
          break;
        default:
          break;
      }


      switch (Edit11) {
        case 1:
          embed.setTimestamp(new Date());
          break;
        case 2:
          if (isNaN(timestamp)) {
            embed.setTimestamp(new Date(timestamp));
          } else {
            embed.setTimestamp(new Date(parseInt(timestamp, 10)));
          }
          break;
        case 3:
          embed.timestamp = undefined;
          break;
        default:
          break;
      }
      switch (Edit12) {
        case 1:
          if (embed.fields.length > fieldNum) {
            embed.fields[fieldNum].name = fieldName;
            embed.fields[fieldNum].value = fieldDescription;
            switch (fieldInline) {
              case 1:
                embed.fields[fieldNum].inline = true;
                break;
              case 2:
                embed.fields[fieldNum].inline = false;
                break;
              default:
                break;
            }
          }
          break;
        case 2:
          embed.fields.splice(fieldNum, 1);
          break;
        case 3:
          embed.fields = [];
          break;
        case 4: {
          const field = {};
          field.name = fieldName;
          field.value = fieldDescription;
          field.inline = fieldInline;
          switch (fieldInline) {
            case 1:
              field.inline = true;
              break;
            case 2:
              field.inline = false;
              break;
            default:
              break;
          }
          embed.fields.splice(fieldNum, 0, field);
          break;
        }
        default:
          break;
      }

    } catch (e) {
      this.callNextAction(cache);
    }
    this.storeValue(embed, storage, varName, cache);
    this.callNextAction(cache);
  },

  mod(DBM) {
    DBM.Actions['Edit Embed Object MOD'] = DBM.Actions['Edit Embed Object MOD'];
  },
};
