import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export const iframeHeight = "800px"

export const description = "A sidebar with a header and a search form."

export default function Page() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1 ">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className=" aspect-video rounded-xl overflow-hidden transform transition-transform duration-200 hover:-translate-y-1"><img src="https://images.unsplash.com/photo-1521489871110-81dc5a61dbda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2428" alt="pic" /></div>
                <div className="bg-muted/50 aspect-video rounded-xl overflow-hidden transform transition-transform duration-200 hover:-translate-y-1"><img src="https://images.unsplash.com/photo-1631477076114-9123f721b9dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340" alt="" /></div>
                <div className="bg-muted/50 aspect-video rounded-xl overflow-hidden transform transition-transform duration-200 hover:-translate-y-1"><img src="https://images.unsplash.com/photo-1481956806014-1eae8e1c579a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2338" alt="" /></div>
              </div>
              <div className="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min overflow-hidden transform transition-transform duration-200 hover:-translate-y-1" ><img src="https://images.unsplash.com/photo-1498588543704-e0d466ddcfe5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340" alt="" /></div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
