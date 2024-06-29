import{w as H,G as W,c as _,g as I}from"./index-Buqp6Ry1.js";function j(e,t,o){if(e)for(const r in e){const n=r.toLocaleLowerCase(),u=t[n];if(u){let a=e[r];r==="header"&&(a=a.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),o&&u.push(`//----${o}----//`),u.push(a)}else H(`${r} placement hook does not exist in shader`)}}const k=/\{\{(.*?)\}\}/g;function G(e){var r;const t={};return(((r=e.match(k))==null?void 0:r.map(n=>n.replace(/[{()}]/g,"")))??[]).forEach(n=>{t[n]=[]}),t}function y(e,t){let o;const r=/@in\s+([^;]+);/g;for(;(o=r.exec(e))!==null;)t.push(o[1])}function R(e,t,o=!1){const r=[];y(t,r),e.forEach(i=>{i.header&&y(i.header,r)});const n=r;o&&n.sort();const u=n.map((i,c)=>`       @location(${c}) ${i},`).join(`
`);let a=t.replace(/@in\s+[^;]+;\s*/g,"");return a=a.replace("{{in}}",`
${u}
`),a}function B(e,t){let o;const r=/@out\s+([^;]+);/g;for(;(o=r.exec(e))!==null;)t.push(o[1])}function E(e){const o=/\b(\w+)\s*:/g.exec(e);return o?o[1]:""}function L(e){const t=/@.*?\s+/g;return e.replace(t,"")}function O(e,t){const o=[];B(t,o),e.forEach(c=>{c.header&&B(c.header,o)});let r=0;const n=o.sort().map(c=>c.indexOf("builtin")>-1?c:`@location(${r++}) ${c}`).join(`,
`),u=o.sort().map(c=>`       var ${L(c)};`).join(`
`),a=`return VSOutput(
                ${o.sort().map(c=>` ${E(c)}`).join(`,
`)});`;let i=t.replace(/@out\s+[^;]+;\s*/g,"");return i=i.replace("{{struct}}",`
${n}
`),i=i.replace("{{start}}",`
${u}
`),i=i.replace("{{return}}",`
${a}
`),i}function A(e,t){let o=e;for(const r in t){const n=t[r];n.join(`
`).length?o=o.replace(`{{${r}}}`,`//-----${r} START-----//
${n.join(`
`)}
//----${r} FINISH----//`):o=o.replace(`{{${r}}}`,"")}return o}const l=Object.create(null),S=new Map;let F=0;function N({template:e,bits:t}){const o=z(e,t);if(l[o])return l[o];const{vertex:r,fragment:n}=Y(e,t);return l[o]=D(r,n,t),l[o]}function X({template:e,bits:t}){const o=z(e,t);return l[o]||(l[o]=D(e.vertex,e.fragment,t)),l[o]}function Y(e,t){const o=t.map(a=>a.vertex).filter(a=>!!a),r=t.map(a=>a.fragment).filter(a=>!!a);let n=R(o,e.vertex,!0);n=O(o,n);const u=R(r,e.fragment,!0);return{vertex:n,fragment:u}}function z(e,t){return t.map(o=>(S.has(o)||S.set(o,F++),S.get(o))).sort((o,r)=>o-r).join("-")+e.vertex+e.fragment}function D(e,t,o){const r=G(e),n=G(t);return o.forEach(u=>{j(u.vertex,r,u.name),j(u.fragment,n,u.name)}),{vertex:A(e,r),fragment:A(t,n)}}const V=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,q=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        return outColor * vColor;
      };
`,w=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,J=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
    }
`,K={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},Q={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function et({bits:e,name:t}){const o=N({template:{fragment:q,vertex:V},bits:[K,...e]});return W.from({name:t,vertex:{source:o.vertex,entryPoint:"main"},fragment:{source:o.fragment,entryPoint:"main"}})}function nt({bits:e,name:t}){return new _({name:t,...X({template:{vertex:w,fragment:J},bits:[Q,...e]})})}const at={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},it={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},M={};function Z(e){const t=[];if(e===1)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let o=0;for(let r=0;r<e;r++)t.push(`@group(1) @binding(${o++}) var textureSource${r+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${o++}) var textureSampler${r+1}: sampler;`)}return t.join(`
`)}function tt(e){const t=[];if(e===1)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let o=0;o<e;o++)o===e-1?t.push("  default:{"):t.push(`  case ${o}:{`),t.push(`      outColor = textureSampleGrad(textureSource${o+1}, textureSampler${o+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join(`
`)}function ut(e){return M[e]||(M[e]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;
    
                ${Z(I())}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);
    
                ${tt(I())}
            `}}),M[e]}const $={};function ot(e){const t=[];for(let o=0;o<e;o++)o>0&&t.push("else"),o<e-1&&t.push(`if(vTextureId < ${o}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${o}], vUV);`),t.push("}");return t.join(`
`)}function ct(e){return $[e]||($[e]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;
              
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;
    
                uniform sampler2D uTextures[${e}];
              
            `,main:`
    
                ${ot(I())}
            `}}),$[e]}const st={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},lt={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},T={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},mt={...T,vertex:{...T.vertex,header:T.vertex.header.replace("group(1)","group(2)")}},vt={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}};class ft{constructor(){this.vertexSize=4,this.indexSize=6,this.location=0,this.batcher=null,this.batch=null,this.roundPixels=0}get blendMode(){return this.renderable.groupBlendMode}packAttributes(t,o,r,n){const u=this.renderable,a=this.texture,i=u.groupTransform,c=i.a,m=i.b,v=i.c,f=i.d,p=i.tx,d=i.ty,h=this.bounds,x=h.maxX,g=h.minX,b=h.maxY,C=h.minY,s=a.uvs,P=u.groupColorAlpha,U=n<<16|this.roundPixels&65535;t[r+0]=c*g+v*C+p,t[r+1]=f*C+m*g+d,t[r+2]=s.x0,t[r+3]=s.y0,o[r+4]=P,o[r+5]=U,t[r+6]=c*x+v*C+p,t[r+7]=f*C+m*x+d,t[r+8]=s.x1,t[r+9]=s.y1,o[r+10]=P,o[r+11]=U,t[r+12]=c*x+v*b+p,t[r+13]=f*b+m*x+d,t[r+14]=s.x2,t[r+15]=s.y2,o[r+16]=P,o[r+17]=U,t[r+18]=c*g+v*b+p,t[r+19]=f*b+m*g+d,t[r+20]=s.x3,t[r+21]=s.y3,o[r+22]=P,o[r+23]=U}packIndex(t,o,r){t[o]=r+0,t[o+1]=r+1,t[o+2]=r+2,t[o+3]=r+0,t[o+4]=r+2,t[o+5]=r+3}reset(){this.renderable=null,this.texture=null,this.batcher=null,this.batch=null,this.bounds=null}}function pt(e,t,o){const r=(e>>24&255)/255;t[o++]=(e&255)/255*r,t[o++]=(e>>8&255)/255*r,t[o++]=(e>>16&255)/255*r,t[o++]=r}export{ft as B,at as a,T as b,et as c,pt as d,nt as e,it as f,ut as g,ct as h,lt as i,vt as j,mt as l,st as r};
