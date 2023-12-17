<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class AdminRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check())
        {
            if (Auth::user()->isAdmin === true)
            {
                return $next($request);
            } else
            {
                abort(403, 'Unauthorized');
            }
        }
        else
        {
        return redirect('/login')->with('message', 'Log in please');
        }
        return $next($request);
    }
}
