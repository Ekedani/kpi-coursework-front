export class Cinema {
  id: string;
  name: string;
  description: string | undefined;
  picture: string | undefined;
  link: string | undefined;

  constructor(id: string, name: string, description: string | undefined, picture: string | undefined, link: string | undefined) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.picture = picture;
    this.link = link;
  }
}
