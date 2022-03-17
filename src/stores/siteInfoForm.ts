import { observable } from "mobx"
interface CreateSiteFormInterface {
  siteId: string;
  sitePassword: string;
  sitePasswordConfirm: string;
  siteName: string;
  siteIdCheckStatus: "wait" | "sending" | "error" | "done"
}

export interface CreateSiteInterface {
  form: CreateSiteFormInterface;
  handleChange: (name: string, value: any) => void;

}

const siteInfoForm = observable<CreateSiteInterface>({
  form: {
    siteId: "",
    sitePassword: "",
    sitePasswordConfirm: "",
    siteName: "",
    siteIdCheckStatus: "wait"
  },
  handleChange(name, value) {
    this.form[name] = value
  }
})

export default siteInfoForm