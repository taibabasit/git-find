import { Controller, Get, Query } from '@nestjs/common';
import { GitinfoService } from './gitinfo.service';

@Controller("gitinfo")
export class GitinfoController {
    constructor(private readonly gitinfoService: GitinfoService) { }

    @Get("user")
    getUser(@Query('username') username: string): any {
        return this.gitinfoService.getuserinfo(username);
    }

    @Get("gist")
    getUserGists(@Query('username') username: string): any {
        return this.gitinfoService.getusergists(username);
    }

    @Get("organization")
    getUserOrganizations(@Query('username') username: string): any {
        return this.gitinfoService.getuserorganizations(username);
    }
}
