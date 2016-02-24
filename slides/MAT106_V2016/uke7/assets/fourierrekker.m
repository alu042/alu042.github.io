%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% Plotter delsummene S_n(x) til en kjent fourierrekke med koeffisienter %
% a_n, b_n over intervallet [-4*pi, 4*pi], for okende verdier av n      %
%                                                                       %
% Eksempelet er hentet fra Kreyszig, Section 11.1, Example  1 (Periodic %
% rectangular wave). Funksjonen er periodisk med periode 2pi og plottes %
% dermed over 4 perioder.                                               %
%                                                                       %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

clear all; close all; clc

p = 2*pi;   % Periode 2pi
k = 1;
N = 150;    % Antall delsummer beregnet

% Intervallet [-2*p, 2*p] samplet i 10000 punkter
x = linspace(-2*p,2*p,10000);

a0 = 0;
S = a0*ones(size(x));   % Initialiserer delsum-vektoren


% Plotter den periodiske rektangulaere bolgen
f = square(2*pi*x/p);
figure(1), plot(x,f, 'r'), title('Periodisk rektangulaer bolge'), ...
    axis([-2*p,2*p,-1.4*k,1.4*k]) % aksen er tilpasset funksjonen.
    

%{
figure(2), plot(x,4*k/pi*sin(2*pi*x/p)), title('delsummen S_1(x)'), ...
    axis([-2*p,2*p,-1.4*k,1.4*k])  % aksen er tilpasset funksjonen.
pause
%}
    
for n=1:N
    % Beregner fourier-koeffisientene (se Kreyszig 11.1)
    an = 0;
    bn = 2*k/(n*pi)*(1-(-1)^n);
    
    % Beregner S_n(x)
    S = S+an*cos(2*n*pi*x/p)+bn*sin(2*n*pi*x/p);
    
    % Plotter delsummen S_n(x)
    figure(2), plot(x,S)
    axis([-2*p,2*p,-1.4*k,1.4*k]);  % aksen er tilpasset funksjonen.  
    title(sprintf('n=%d',n))
    pause(0.1) 
end

