<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ServiceDetailController extends AbstractController
{
    #[Route('/service', name: 'app_service_detail')]
    public function index(): Response
    {
        return $this->render('service_detail/index.html.twig', [
            'controller_name' => 'ServiceDetailController',
        ]);
    }
}
