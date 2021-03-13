// enable o disable button
export const DISABLE_BUTTON = {
  YES: true,
  NOT: false,
};
// mat icon
export enum MAT_ICON {
  CIRCLE = 'fiber_manual_record',
  /**
   *
   */
  ACTIONS = 'more_horiz',
  SEARCH = 'search',
  PREVIEW = 'visibility',
  UPDATE = 'create',
  CLONE = 'file_copy',
  ACTIVATE = 'offline_pin',
  DEACTIVATE = 'restore_from_trash',
  NOT_DATA = 'table_view',
  NOT_SYNC = 'sync_disabled',
  WARN = 'warning',
  CLOSE = 'close',
  ERROR = 'error_outline',
  ATTACHMENT = 'attach_file',
  REMOVE = 'remove_circle_outline',

  DEACTIVATE_TEXT = 'Inactivar',
  ACTIVATE_TEXT = 'Activar',
}
// toggle name
export enum STATUS_TOGGLE {
  ENABLE = 'Activo',
  DISABLE = 'Inactivo',
  ENABLED = 'Activado',
  DISABLED = 'Desactivado',
}

// loading state
export enum PROGRESS_STATE {
  SHOW = 'LOADING',
  HIDE = 'FINISHED',
  DONE = 'DONE',
  CHECKED = 'CHECKED',
  FAILED = 'FAILED',
  NOTHING = 'NODATA',
}
