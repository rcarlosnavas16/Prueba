import { Markers } from 'src/app/main/dashboard/dashboard.model';
/**
 *
 * @param element
 * @returns build html
 */
export function buildTemplate(element: Markers) {
  return (
    `<div class="pop-up">` +
    `<h1 class="title text-center">${element.location}</h1>` +
    `<div class="fix-row">` +
    `<span class="title cl_cancel">Total de casos</span>` +
    `<span class="title cl_cancel">${element.total_count}</span>` +
    `</div>` +
    `<div class="line-divider">` +
    `</div>` +
    `<div class="bodyContent">` +
    `<div class="fix-row">` +
    `<div class="items">` +
    `<div class="circle cl_warn">` +
    `</div>` +
    `<span class="sub-title cl_nt4">Activos</span>` +
    `</div>` +
    `<span class="sub-title cl_nt4">${element.confirmed}</span>` +
    `</div>` +
    `<div class="fix-row">` +
    `<div class="items">` +
    `<div class="circle cl_success">` +
    `</div>` +
    `<span class="sub-title cl_nt4">Recuperados</span>` +
    `</div>` +
    `<span class="sub-title cl_nt4">${element.recovered || '-'}</span>` +
    `</div>` +
    `<div class="fix-row">` +
    `<div class="items">` +
    `<div class="circle cl_down">` +
    `</div>` +
    `<span class="sub-title cl_nt4">Fallecidos</span>` +
    `</div>` +
    `<span class="sub-title cl_nt4">${element.dead}</span>` +
    `</div>` +
    `</div>` +
    `</div>`
  );
}
