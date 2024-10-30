export class Resource {
  image: string;
  title: string;
  description: string;
  url: string

  constructor(resource:{image: string, title: string, description: string, url: string}) {
    this.image = resource.image;
    this.title = resource.title;
    this.description = resource.description;
    this.url = resource.url;
  }
}
