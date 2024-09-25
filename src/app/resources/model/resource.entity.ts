export class Resource {
  image: string;
  title: string;
  description: string;

  constructor(resource:{image: string, title: string, description: string}) {
    this.image = resource.image;
    this.title = resource.title;
    this.description = resource.description;
  }
}
