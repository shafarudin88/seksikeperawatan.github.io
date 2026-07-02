export function buildDocLink(folder,fileName){
 if(!fileName) return "";
 return `assets/docs/${folder}/${fileName}`;
}

export function renderDocButton(folder,fileName,label){
 if(!fileName) return "-";
 const href=buildDocLink(folder,fileName);
 return `<a class="btn" target="_blank" href="${href}">${label}</a>`;
}
