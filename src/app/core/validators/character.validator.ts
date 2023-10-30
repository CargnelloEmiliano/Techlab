import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Letras, números y espacios.
export function isAlphanumericWithSpaces(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const regex = /^[A-Za-z0-9\s]+$/g;
    return regex.test(control.value)
      ? null
      : { notAlphanumericWithSpaces: true };
  };
}

// Distinto de espacios.
export function notOnlySpaces(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const regex = /^\s+$/;
    return regex.test(control.value) ? { onlySpaces: true } : null;
  };
}

export function getErrorMessage(control: any) {
  if (control.errors?.['required']) {
    return `Este campo es obligatorio.`;
  } else {
    if (control.errors?.['minlength']) {
      return `Debe tener al menos ${control.errors?.['minlength'].requiredLength} caracteres.`;
    }
    if (control.errors?.['maxlength']) {
      return `No puede tener más de ${control.errors?.['maxlength'].requiredLength} caracteres.`;
    }
    if (control.errors?.['notAlphanumericWithSpaces']) {
      return `No puede tener caracteres especiales.`;
    }
    if (control.errors?.['onlySpaces']) {
      return `No puede tener solo espacios en blanco.`;
    }
  }
  return '';
}
