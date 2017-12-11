import { NgModule } from '@angular/core';
//modifico mauro el nombre del componenete porque estaba mal
import { ButtonRenderComponent } from './button-renderer/button-renderer';
import { DesasignarMateriaComponent } from './desasignar-materia/desasignar-materia';
@NgModule({
	declarations: [ButtonRenderComponent,
    DesasignarMateriaComponent],
	imports: [],
	exports: [ButtonRenderComponent,
    DesasignarMateriaComponent]
})
export class ComponentsModule {}
