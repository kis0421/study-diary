import { observable } from "mobx"
interface CreateSiteFormInterface {
  siteId: string;
  sitePassword: string;
  siteName: string;
}

export interface CreateSiteInterface {
  form: CreateSiteFormInterface;
  handleChange: (name: string, value: any) => void;

}

const siteInfoForm = observable<CreateSiteInterface>({
  form: {
    siteId: "",
    sitePassword: "",
    siteName: "",
  },
  handleChange(name, value) {
    this.form[name] = value
  }
})

export default siteInfoForm