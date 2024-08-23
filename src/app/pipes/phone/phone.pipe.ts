import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phone",
  standalone: true,
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    value =
      "(" +
      value.slice(0, 3) +
      ") " +
      value.slice(3, 6) +
      "-" +
      value.slice(6, 10);

    return value;
  }

  revert(value: string): number {
    return typeof value === "string"
      ? Number(value.replace(/[\(\)\- ]?/g, ""))
      : value;
  }
}
