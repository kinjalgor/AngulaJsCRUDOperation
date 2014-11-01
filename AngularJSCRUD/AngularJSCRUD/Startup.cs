using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJSCRUD.Startup))]
namespace AngularJSCRUD
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
