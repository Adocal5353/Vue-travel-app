import{_ as l,o as i,c as o,a as e,t as c,s as g,r,d as _,F as k,e as $,f as v,g as B}from"./index.794ea4c8.js";const C={props:{experience:{type:Object,required:!0}}},b={class:"card"},w=["src","alt"],y={class:"card__text"};function E(t,a,s,u,p,n){return i(),o("div",b,[e("img",{src:`/images/${s.experience.image}`,alt:s.experience.name},null,8,w),e("span",y,c(s.experience.name),1)])}const D=l(C,[["render",E]]),G={};function N(t,a){return i(),o("span",null,[e("button",{onClick:a[0]||(a[0]=s=>t.$router.back())},"go back")])}const S=l(G,[["render",N]]),q={props:{id:{type:Number,required:!0}},computed:{destinationId(){return parseInt(this.$route.params.id)},destination(){return g.destinations.find(t=>t.id===this.id)}},components:{ExperienceCard:D,GoBack:S}},F={class:"destination"},I={class:"destination-details"},V=["src"],j={class:"experiences"},L={class:"cards"};function O(t,a,s,u,p,n){const m=r("GoBack"),x=r("ExperienceCard"),h=r("router-link"),f=r("router-view");return i(),o("div",null,[_(m),e("section",F,[e("h1",null,"Welcome to "+c(n.destination.name),1),e("div",I,[e("img",{src:`/images/${n.destination.image}`,alt:"{{destination.name}}"},null,8,V),e("p",null,c(n.destination.description),1)])]),e("section",j,[e("h2",null,"Top experiences in "+c(n.destination.name),1),e("div",L,[(i(!0),o(k,null,$(n.destination.experiences,d=>(i(),v(h,{key:d.slug,to:{name:"experience.show",params:{id:n.destination.id,slug:n.destination.slug,experienceSlug:d.slug}}},{default:B(()=>[_(x,{experience:d},null,8,["experience"])]),_:2},1032,["to"]))),128))]),_(f)])])}const W=l(q,[["render",O]]);export{W as default};
